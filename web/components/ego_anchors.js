class egoAnchors extends HTMLElement {
  connectedCallback() {
    const content = this.innerHTML;
    this.innerHTML = `${content}`;
  }
}

customElements.define("ego-nchors", egoAnchors);
