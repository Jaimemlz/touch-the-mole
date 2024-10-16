import { fixture, html } from "@open-wc/testing";
import "../components/score-panel/score-panel.view";

describe("ScoreView Component", () => {
  it("should render the initial score", async () => {
    const element = await fixture(html`<score-panel></score-panel>`);

    const scoreElement = element.shadowRoot.querySelector(".score");
    expect(scoreElement).not.toBeNull();
    expect(scoreElement.textContent).toBe("0");
  });

  it("should increment the score when incrementScore is true", async () => {
    const element = await fixture(
      html`<score-panel .pointsPerClick=${5}></score-panel>`
    );

    element.incrementScore = true;
    await element.performUpdate();

    const scoreElement = element.shadowRoot.querySelector(".score");
    expect(scoreElement.textContent).toBe("5");
  });

  it("should decrement the score when decrementScore is true", async () => {
    const element = await fixture(
      html`<score-panel .pointsPerClick=${3}></score-panel>`
    );

    element._points = 10;
    element.decrementScore = true;
    await element.performUpdate();
    const scoreElement = element.shadowRoot.querySelector(".score");
    expect(scoreElement.textContent).toBe("7");
  });

  it("should reset the score when resetScore is true", async () => {
    const element = await fixture(html`<score-panel></score-panel>`);

    element._points = 15;
    await element.performUpdate();
    let scoreElement = element.shadowRoot.querySelector(".score");
    expect(scoreElement.textContent).toBe("15");
    element.resetScore = true;
    await element.performUpdate();

    scoreElement = element.shadowRoot.querySelector(".score");
    expect(scoreElement.textContent).toBe("0");
  });

  it("should add increment class when score is incremented", async () => {
    const element = await fixture(html`<score-panel></score-panel>`);

    element.incrementScore = true;
    await element.performUpdate();

    const scoreElement = element.shadowRoot.querySelector(".score");
    expect(scoreElement.classList.contains("increment")).toBe(true);
  });

  it("should add decrement class when score is decremented", async () => {
    const element = await fixture(html`<score-panel></score-panel>`);

    element._points = 10;
    element.decrementScore = true;
    element.requestUpdate();
    await element.performUpdate();

    const scoreElement = element.shadowRoot.querySelector(".score");
    expect(scoreElement.classList.contains("decrement")).toBe(true);
  });
});
