import { LitElement, html } from "lit";

export class MissionStatus extends LitElement {
  static get properties() {
    return {
      status: { type: Boolean },
    };
  }

  render() {
    return html`
      <section class="missionStatus ${this.status ? "success" : "failture"}">
        <p>STATUS</p>
        <p>${this.status ? "Success" : "Failure"}</p>
      </section>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("mission-status", MissionStatus);
