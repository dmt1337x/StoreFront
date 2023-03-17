import { SortMethodEnum } from '../../../helpers/sort-method.enum';

export class SortMethodQuery {
  constructor(
    public readonly text: string,
    public readonly value: SortMethodEnum
  ) {}
}
