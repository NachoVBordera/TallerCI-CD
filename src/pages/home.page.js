import "../components/lastLaunch.component";

export class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="launchesSection">
        <last-launch></last-launch>
      </section>
     
    `;
  }
}

customElements.define("home-page", HomePage);
