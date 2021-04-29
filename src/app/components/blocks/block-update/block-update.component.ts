import {Component, OnInit, ViewChild} from '@angular/core';
import {Block} from '../block.model';
import {People} from '../../peoples/people.model';
import {BlockService} from '../block.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {PeopleService} from '../../peoples/people.service';

@Component({
    selector: 'app-block-update',
    templateUrl: './block-update.component.html',
    styleUrls: ['./block-update.component.css']
})
export class BlockUpdateComponent implements OnInit {
    block: Block;
    deletedPeoples: People[];
    dataSource = new MatTableDataSource<string>([]);
    displayedColumns = ['name', 'ap', 'action'];

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


    constructor(private blockService: BlockService,
                private peopleService: PeopleService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        const id = this.route.snapshot.paramMap.get('id');
        this.blockService.readById(id).subscribe(async block => {
            this.block = block;
            this.dataSource.data = await this.createPeoplesArray(this.block);
            this.deletedPeoples = [];
        });
    }

    updateBlock(): void {
        this.blockService.update(this.block).subscribe(async () => {
            await this.updateAll(this.deletedPeoples);
            this.blockService.showMessage('Successful Block Updated');
            await this.router.navigate(['/blocks']);
        });

    }

    async createPeoplesArray(block) {
        const peoples = [];
        for (const people of block.peoples) {
            peoples.push({
                _id: people._id,
                name: people.name,
                block: people.block,
                ap: people.ap
            });
        }
        return peoples;
    }


    async updateAll(deletedPeoples) {
        for (const people of deletedPeoples) {
            await this.peopleService.updatePeople(people).subscribe(response => {});
        }
    }

    removePeopleFromTable(value) {
        const table = this.dataSource.data;
        const index = table.indexOf(value);
        if (index > -1) {
            table.splice(index, 1);
            const people = value;
            people.block = null;
            people.ap = null;
            this.deletedPeoples.push(people);
            this.block.peoples.splice(index, 1);
        }
        this.dataSource.data = table;
    }


    cancel(): void {
        this.router.navigate(['/blocks']);
    }


}
