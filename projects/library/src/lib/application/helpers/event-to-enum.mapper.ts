import { SortMethodEnum } from './sort-method.enum';

export const eventToEnumMapper: Record<number, SortMethodEnum> = {
  1: SortMethodEnum.FEATURED_DESC,
  2: SortMethodEnum.PRICE_ASC,
  3: SortMethodEnum.PROCE_DESC,
  4: SortMethodEnum.RATING_DESC,
};
