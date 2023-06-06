import { LaunchesRepositoy } from "../repositories/launches.repository";
import { formatDate } from "../utils/formatDate";

export class UpcomingLaunchUseCase {
  static async execute() {
    const repository = new LaunchesRepositoy();
    const response = await repository.getUpcomingLaunch();
    return {
      ...response,
      date_local: formatDate(response.date_local),
    };
  }
}
