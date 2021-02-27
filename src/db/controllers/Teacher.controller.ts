import { ITeacher, Teacher } from "../models";

class TeacherController {
  static createTeacher = async (
    data: ITeacher
  ): Promise<[Teacher, boolean] | null> => {
    try {
      return await Teacher.findOrCreate({
        where: data,
      });
    } catch (error) {
      console.log(error);

      return null;
    }
  };

  static getAllTeachers = async (
    filter: Partial<ITeacher>
  ): Promise<Teacher[] | null> => {
    try {
      return await Teacher.findAll({ where: filter });
    } catch (error) {
      console.log(error);

      return null;
    }
  };

  static getTeacher = async (
    filter: Partial<ITeacher>
  ): Promise<Teacher | null> => {
    try {
      return await Teacher.findOne({ where: filter });
    } catch (error) {
      console.log(error);

      return null;
    }
  };

  static updateTeacher = async (
    id: number,
    data: Partial<ITeacher>
  ): Promise<[number, Teacher[]] | null> => {
    try {
      return await Teacher.update(data, { where: { id } });
    } catch (error) {
      console.log(error);

      return null;
    }
  };

  static deleteTeacher = async (data: ITeacher): Promise<number | null> => {
    try {
      return await Teacher.destroy({
        where: { ...data },
      });
    } catch (error) {
      console.log(error);

      return null;
    }
  };
}

export { TeacherController };
