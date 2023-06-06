import { LitElement, html } from "lit";
import { LastLaunchUseCase } from "../usecases/last-launch.usecase";

export class LastLaunch extends LitElement {
  static get properties() {
    return {
      lastLaunch: { type: Object },
    };
  }

  async connectedCallback() {
    super.connectedCallback();
    this.lastLaunch = await LastLaunchUseCase.execute();
  }

  render() {
    return html`
      <article class="lastLaunchArticle">
        <h2>Last Launch</h2>
        <section class="lastMissionSection">
          <ul class="LastLaunchListData">
            <li>
              <p>Mission name</p>
              <p>${this.lastLaunch?.name}</p>
            </li>
            <li>
              <p>Rocket</p>
              <p>Falcon-9</p>
            </li>
            <li>
              <p>Date</p>
              <p>${this.lastLaunch?.date_local}</p>
            </li>
          </ul>

          <ul class="LastLaunchListData">
            <li>
              <p>State</p>
              <p>${this.lastLaunch?.success ? "Success" : "Failed"}</p>
            </li>
            <li>
              <p>Article</p>
              <a href="${this.lastLaunch?.links.article}">Read more</a>
            </li>
            <li>
              <p>Watch</p>
              <a href="${this.lastLaunch?.links.webcast}">Watch Video</a>
            </li>
          </ul>
        </section>
        <span class="spanImagecontainer">
          <img src="${this.lastLaunch?.links.patch.small}" alt="mission logo" />
        </span>
      </article>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("last-launch", LastLaunch);
