import { LaunchesRepositoy } from "../repositories/launches.repository";
import { formatDate } from "../utils/formatDate";
export class AllLaunchesUseCase {
  static async execute(num) {
    const query = {
      options: {
        limit: 20,
        page: num ?? 1,
      },
    };
    const repository = new LaunchesRepositoy();
    const launches = await repository.getAllLaunches(query);

    return launches.docs.map((launch) => {
      return {
        ...launch,
        date_utc: formatDate(launch.date_utc),
      };
    });
  }
}
