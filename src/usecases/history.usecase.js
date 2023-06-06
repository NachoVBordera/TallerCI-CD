import { LaunchesRepositoy } from "../repositories/launches.repository";
import { formatDate } from "../utils/formatDate";

export class HistoryUseCase {
  static async execute() {
    const repository = new LaunchesRepositoy();
    const response = await repository.getHistory();
    return response.map((element) => {
      return {
        ...element,
        date_utc: formatDate(element.event_date_utc),
      };
    });
  }
}
