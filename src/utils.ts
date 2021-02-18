const stringIsNumber = (value: string): boolean => !Number.isNaN(Number(value));

const enumToArray = (enums: any) => Object
    .keys(enums)
    .filter(stringIsNumber)
    .map((key: string) => enums[key]);

const checkIdReturnNumberOrException = (id: string): number => {
    const idNum: number = +id;
    if (!idNum) throw new Error('Invalid id');
    return idNum;
};

export {checkIdReturnNumberOrException, enumToArray, stringIsNumber}