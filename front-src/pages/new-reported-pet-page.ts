import { Router } from "@vaadin/router";
const missingPetPic = require("../resources/missing-pet.png");

customElements.define(
  "new-reported-pet-page",
  class extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
      this.connectecCallback();
    }
    connectecCallback() {
      this.render();

      const buttonReportEl = this.shadow.querySelector(
        ".come-back-button"
      ) as HTMLElement;

      buttonReportEl.addEventListener("click", async (e: any) => {
        e.preventDefault();
        Router.go("/home");
      });
    }
    render() {
      this.shadow.innerHTML = `
        <div class="page-container">
          <header-menu-comp></header-menu-comp>
          <div class="general-container">
            <h1 class="main-title">Tu mascota ha sido reportada</h1>
            <img class="new-reported-pet-picture" src="${missingPetPic}" alt="empty-pic">
            <button-comp class="come-back-button" color="#ff7f87">Volver</button-comp>
          </div>
        </div>
      `;

      const style = document.createElement("style");
      style.innerHTML = `
          .page-container {
            min-height: 100vh;
            background: linear-gradient(#fafafa 50%, #8896e090);
          }
          .general-container {
            display: grid;
            justify-items: center;
            padding: 0 15px;
          }
          .main-title {
            font-family: Poppins Semi Bold;
            font-size: 25px;
            color: #141414;
            text-align: center;
            line-height: 30px;
            margin-top: 100px;
          }
          .new-reported-pet-picture {
            height: 200px;
          }
          .come-back-button {
            margin-top: 55px;
          }
        `;

      this.shadow.appendChild(style);
    }
  }
);
