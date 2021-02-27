import { IClassroom, Classroom } from "../models";

class ClassroomController {
  static createClassroom = async (
    data: IClassroom
  ): Promise<[Classroom, boolean] | null> => {
    try {
      return await Classroom.findOrCreate({
        where: data,
      });
    } catch (error) {
      console.log(error);

      return null;
    }
  };

  static getAllClassrooms = async (
    filter: Partial<IClassroom>
  ): Promise<Classroom[] | null> => {
    try {
      return await Classroom.findAll({ where: filter });
    } catch (error) {
      console.log(error);

      return null;
    }
  };

  static getClassroom = async (
    filter: Partial<IClassroom>
  ): Promise<Classroom | null> => {
    try {
      return await Classroom.findOne({ where: filter });
    } catch (error) {
      console.log(error);

      return null;
    }
  };

  static updateClassroom = async (
    id: number,
    newData: Partial<IClassroom>
  ): Promise<[number, Classroom[]] | null> => {
    try {
      return await Classroom.update(newData, { where: { id } });
    } catch (error) {
      console.log(error);

      return null;
    }
  };

  static deleteClassroom = async (data: IClassroom): Promise<number | null> => {
    try {
      return await Classroom.destroy({
        where: data,
      });
    } catch (error) {
      console.log(error);

      return null;
    }
  };
}

export { ClassroomController };
