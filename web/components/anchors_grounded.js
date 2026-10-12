import "./ego_anchors.js";
import "./grounded_adrift.js";

class anchorsGrounded extends HTMLElement {
  connectedCallback() {
    const content = this.innerHTML;
    this.innerHTML = `
      <div class="anchor-box">
        <div class="left anchor-list">
          <ego-anchors>${content}</ego-anchors>
        </div>
        <div class="right">
          <grounded-adrift></grounded-adrift>
        </div>
      </div>
    `;
  }
}

customElements.define("anchors-grounded", anchorsGrounded);
