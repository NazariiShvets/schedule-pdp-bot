const covertModelFromDbToIModelFromDb = <T, K>(model: T): K =>
  (model as any).dataValues as K;

export { covertModelFromDbToIModelFromDb };
