import { LaunchesRepositoy } from "../repositories/launches.repository";
import { formatDate } from "../utils/formatDate";

export class LastLaunchUseCase {
  static async execute() {
    const repository = new LaunchesRepositoy();
    const response = await repository.getLastLaunches();
    return { ...response, date_local: formatDate(response.date_local) };
  }
}
