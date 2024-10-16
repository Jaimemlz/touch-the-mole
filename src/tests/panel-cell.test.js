import { fixture, html } from "@open-wc/testing";
import "../components/panel-cell/panel-cell.view";

describe("CellView Component", () => {
  it("should render mole when animationTime is set", async () => {
    const element = await fixture(
      html`<panel-cell .animationTime=${1000}></panel-cell>`
    );

    const mole = element.shadowRoot.querySelector(".cell__mole");
    expect(mole).not.toBeNull();
  });

  it("should not render mole when animationTime is not set", async () => {
    const element = await fixture(html`<panel-cell></panel-cell>`);

    const mole = element.shadowRoot.querySelector(".cell__mole");
    expect(mole).toBeNull();
  });

  it("should render mole with the correct class when not clicked", async () => {
    const element = await fixture(
      html`<panel-cell .animationTime=${1000}></panel-cell>`
    );

    const mole = element.shadowRoot.querySelector(".cell__mole");
    expect(mole.classList.contains("cell__mole--normal")).toBe(true);
  });

  it("should render mole with 'hurt' class when clicked", async () => {
    const element = await fixture(
      html`<panel-cell .animationTime=${1000}></panel-cell>`
    );

    element._clicked = true;
    await element.updateComplete;

    const mole = element.shadowRoot.querySelector(".cell__mole");
    expect(mole.classList.contains("cell__mole--hurt")).toBe(true);
  });

  it("should render mole with error class if isErrorCell is true", async () => {
    const element = await fixture(
      html`<panel-cell
        .isErrorCell=${true}
        .animationTime=${1000}
      ></panel-cell>`
    );

    const mole = element.shadowRoot.querySelector(".cell__mole");
    expect(mole.classList.contains("cell__mole-error--normal")).toBe(true);
  });

  it("should update CSS variable for animation duration based on animationTime", async () => {
    const element = await fixture(
      html`<panel-cell .animationTime=${1500}></panel-cell>`
    );

    expect(element.style.getPropertyValue("--mole-animation-duration")).toBe(
      "1500ms"
    );
  });
});
