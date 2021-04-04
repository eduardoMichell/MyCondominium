import {People} from '../peoples/people.model';

export interface Block {
  _id?: string;
  name: string;
  peoples?: People[];
}
