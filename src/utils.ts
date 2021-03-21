import { IUser, IUserModel, User } from "./db";
import { DAYS, NUMERATOR_INTERVAL } from "./telegram/types";

const covertModelFromDbToIModelFromDb = <T, K>(model: T): K =>
  (model as any).dataValues as K;

const convertUserToIUser = (user: User): IUser => {
  const iusermodel = covertModelFromDbToIModelFromDb<User, IUserModel>(user);
  return {
    ...iusermodel,
    state: JSON.parse(iusermodel.state),
  };
};

const enumToArray = (enums: any) =>
  Object.keys(enums).map((key: string) => enums[key]);

const getCurrentDay = () => enumToArray(DAYS)[new Date().getDay()];

export {
  enumToArray,
  convertUserToIUser,
  covertModelFromDbToIModelFromDb,
  getCurrentDay,
};
