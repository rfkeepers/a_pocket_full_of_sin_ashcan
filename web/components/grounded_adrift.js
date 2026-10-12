class groundedAdrift extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="anchor-diagram">
        <div class="label">Adrift</div>
        <div class="anchor-diagram">
          <span class="box"></span>
          <span class="line"></span>
          <span class="center"></span>
          <span class="line"></span>
          <span class="box"></span>
        </div>
        <div class="label">Anchored</div>
      </div>
    `;
  }
}

customElements.define("grounded-adrift", groundedAdrift);
