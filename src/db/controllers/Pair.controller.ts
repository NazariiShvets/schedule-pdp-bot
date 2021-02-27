import { IPair, Pair } from "../models";

class PairController {
  static createPair = async (data: IPair): Promise<[Pair, boolean] | null> => {
    try {
      return await Pair.findOrCreate({
        where: data,
      });
    } catch (error) {
      console.log(error);

      return null;
    }
  };

  static getAllPairs = async (
    filter: Partial<IPair>
  ): Promise<Pair[] | null> => {
    try {
      return await Pair.findAll({ where: filter });
    } catch (error) {
      console.log(error);

      return null;
    }
  };

  static getPair = async (filter: Partial<IPair>): Promise<Pair | null> => {
    try {
      return await Pair.findOne({ where: filter });
    } catch (error) {
      console.log(error);

      return null;
    }
  };

  static updatePair = async (
    id: number,
    newTeacherData: Partial<IPair>
  ): Promise<[number, Pair[]] | null> => {
    try {
      return await Pair.update(newTeacherData, { where: { id } });
    } catch (error) {
      console.log(error);

      return null;
    }
  };

  static deletePair = async (newData: IPair): Promise<number | null> => {
    try {
      return await Pair.destroy({
        where: { ...newData },
      });
    } catch (error) {
      console.log(error);

      return null;
    }
  };
}

export { PairController };
