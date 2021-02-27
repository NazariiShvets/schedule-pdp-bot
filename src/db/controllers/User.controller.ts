import { IUser, User } from "../models";

class UserController {
  static createUser = async (data: IUser): Promise<[User, boolean] | null> => {
    try {
      return await User.findOrCreate({
        where: data,
      });
    } catch (error) {
      console.log(error);

      return null;
    }
  };

  static getAllUsers = async (
    filter: Partial<IUser>
  ): Promise<User[] | null> => {
    try {
      return await User.findAll({ where: filter });
    } catch (error) {
      console.log(error);

      return null;
    }
  };

  static getUser = async (filter: Partial<IUser>): Promise<User | null> => {
    try {
      return await User.findOne({ where: filter });
    } catch (error) {
      console.log(error);

      return null;
    }
  };

  static updateUser = async (
    id: number,
    data: Partial<IUser>
  ): Promise<[number, User[]] | null> => {
    try {
      return await User.update(data, { where: { id } });
    } catch (error) {
      console.log(error);

      return null;
    }
  };

  static deleteUser = async (data: IUser): Promise<number | null> => {
    try {
      return await User.destroy({
        where: { ...data },
      });
    } catch (error) {
      console.log(error);

      return null;
    }
  };
}

export { UserController };
