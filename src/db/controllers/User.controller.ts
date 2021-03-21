import { IUser, User } from "../models";
import { convertUserToIUser } from "../../utils";

class UserController {
  static createUser = async (userData: IUser): Promise<IUser | null> => {
    try {
      const user = await User.create({
        ...userData,
        state: JSON.stringify(userData.state),
      });

      return convertUserToIUser(user);
    } catch (e) {
      console.log(e);

      return null;
    }
  };

  static getAllUsers = async (filter: Partial<IUser>) => {
    try {
      const users = await User.findAll({ where: filter });

      return users.map(convertUserToIUser);
    } catch (error) {
      console.log(error);

      return null;
    }
  };

  static getUser = async (telegramId: number): Promise<IUser | null> => {
    try {
      const user = await User.findOne({ where: { telegramId } });

      if (!user) {
        return null;
      }

      return convertUserToIUser(user);
    } catch (error) {
      console.log(error);

      return null;
    }
  };

  static updateUser = async (
    telegramId: number,
    data: Partial<Omit<IUser, "telegramId">>
  ): Promise<void> => {
    try {
      await User.update(
        { ...data, state: JSON.stringify(data.state) },
        {
          where: { telegramId },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
}

export { UserController };
