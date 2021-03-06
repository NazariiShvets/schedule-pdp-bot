import { IPair, Pair } from "../models";

class PairController {
  static createPair = async (data: IPair): Promise<IPair | null> => {
    try {
      const pair = await Pair.create(data);

      return (pair as any).dataValues as IPair;
    } catch (error) {
      console.log(error);

      return null;
    }
  };

  static getAllPairs = async (
    filter: Partial<IPair>
  ): Promise<IPair[] | null> => {
    try {
      const pairs = await Pair.findAll({ where: filter });

      return pairs.map((pair) => (pair as any).dataValues as IPair);
    } catch (error) {
      console.log(error);

      return null;
    }
  };

  static getPair = async (filter: Partial<IPair>): Promise<IPair | null> => {
    try {
      const pair = await Pair.findOne({ where: filter });

      return (pair as any).dataValues as IPair;
    } catch (error) {
      console.log(error);

      return null;
    }
  };

  static updatePair = async (
    id: number | Partial<IPair>,
    updateData: Partial<IPair>
  ) => {
    const filter = typeof id !== "object" ? { id } : id;

    await Pair.update(updateData, { where: filter });
  };

  static deletePair = async (
    filter: Partial<IPair>
  ): Promise<number | null> => {
    try {
      return await Pair.destroy({
        where: filter,
      });
    } catch (error) {
      console.log(error);

      return null;
    }
  };
}

export { PairController };
