// Обертка респонса, возвращаемая с API
// T - тип возвращаемой сущности
// K - ключ объекта в ответе
export type ResponseList<T, K extends string = 'items'> = {
  [P in K]: T[];
} & {
  limit: number;
  skip: number;
  total: number;
};
