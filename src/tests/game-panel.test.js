import { fixture, html } from "@open-wc/testing";
import "../components/game-panel/game-panel.view";

describe("Render grid", () => {
  it("should render a grid based on columns and rows", async () => {
    const element = await fixture(
      html`<game-panel .columns=${3} .rows=${3}></game-panel>`
    );

    const cells = element.shadowRoot.querySelectorAll("panel-cell");
    expect(cells.length).toBe(9);
  });
});

describe("Difficulty extreme", () => {
  it("should adjust grid size based on difficulty", async () => {
    const element = await fixture(html`<game-panel></game-panel>`);

    element.difficulty = "EXTREME";
    await element.updateComplete;

    expect(element.columns).toBe(4);
    expect(element.rows).toBe(4);
  });

  it("should render a grid extreme", async () => {
    const element = await fixture(
      html`<game-panel difficulty="EXTREME"></game-panel>`
    );

    const cells = element.shadowRoot.querySelectorAll("panel-cell");
    expect(cells.length).toBe(16);
  });
});

describe("Game state", () => {
  it("should start and stop the game based on play state", async () => {
    const element = await fixture(html`<game-panel></game-panel>`);

    element.play = true;
    await element.updateComplete;
    expect(element._interval).not.toBeNull();

    element.play = false;
    await element.updateComplete;
    expect(element._interval).toBeNull();
  });
});

describe("Random active cell generation", () => {
  it("should generate a random active cell", async () => {
    const element = await fixture(html`<game-panel></game-panel>`);

    element.play = true;
    await element.updateComplete;

    expect(element._cellActive).not.toBeNull();
  });
});
