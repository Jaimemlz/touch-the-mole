import { fixture, html } from "@open-wc/testing";
import "../touch-the-mole.view";

describe("TRender and logic tests", () => {
  it("should render login panel when no user is logged in", async () => {
    const element = await fixture(html`<touch-the-mole></touch-the-mole>`);

    const loginPanel = element.shadowRoot.querySelector("login-panel");
    expect(loginPanel).toBeDefined();
  });

  it("should render game components when user is logged in", async () => {
    const element = await fixture(html`<touch-the-mole></touch-the-mole>`);

    element.user = "Player1";
    await element.updateComplete;

    const gamePanel = element.shadowRoot.querySelector("game-panel");
    const scorePanel = element.shadowRoot.querySelector("score-panel");

    expect(gamePanel).toBeDefined();
    expect(scorePanel).toBeDefined();
  });
});
