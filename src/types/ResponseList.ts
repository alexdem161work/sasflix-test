export type ResponseList<T, K extends string = 'items'> = {
  [P in K]: T[];
} & {
  limit: number;
  skip: number;
  total: number;
};
