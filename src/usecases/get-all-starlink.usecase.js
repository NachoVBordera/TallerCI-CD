import { LaunchesRepositoy } from "../repositories/launches.repository";

export class StarlinkUseCase {
  static async execute() {
    const repository = new LaunchesRepositoy();
    return await repository.getStarlink();
  }
}
