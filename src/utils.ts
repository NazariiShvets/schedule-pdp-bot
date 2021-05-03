import { IUser, IUserModel, User } from "./db";
import { DAYS } from "./telegram/types";
import { TelegramAPI } from "./api";

const covertModelFromDbToIModelFromDb = <T, K>(model: T): K =>
  (model as any).dataValues as K;

const convertUserToIUser = (user: User): IUser => {
  const iusermodel = covertModelFromDbToIModelFromDb<User, IUserModel>(user);
  return {
    ...iusermodel,
    state: JSON.parse(iusermodel.state),
  };
};

const enumValuesToArray = (someEnum: any) =>
  Object.keys(someEnum).map((key) => someEnum[key]);

const enumKeysToArray = (someEnum: any) =>
  Object.keys(someEnum)
    .filter((value) => !Number.isNaN(Number(value)))
    .map((key) => someEnum[key]);

const getCurrentDay = () => enumValuesToArray(DAYS)[new Date().getDay()];

export {
  enumValuesToArray,
  enumKeysToArray,
  convertUserToIUser,
  covertModelFromDbToIModelFromDb,
  getCurrentDay,
};
