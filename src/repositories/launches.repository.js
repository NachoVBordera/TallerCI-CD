import axios from "axios";

export class LaunchesRepositoy {
  async getLastLaunches() {
    return await (
      await axios.get("https://api.spacexdata.com/v4/launches/latest")
    ).data;
  }
}
