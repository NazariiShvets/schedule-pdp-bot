const stringIsNumber = (value: string): boolean => !Number.isNaN(Number(value));

const enumToArray = (enums: any) =>
  Object.keys(enums)
    .filter(stringIsNumber)
    .map((key: string) => enums[key]);

export { enumToArray };
