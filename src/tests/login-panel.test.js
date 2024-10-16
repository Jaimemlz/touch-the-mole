import { fixture, html } from "@open-wc/testing";
import "../components/login-panel/login-panel.view";

describe("Initial render", () => {
  it("should render the input and button correctly", async () => {
    const element = await fixture(html`<login-panel></login-panel>`);

    const label = element.shadowRoot.querySelector("label");
    const input = element.shadowRoot.querySelector("input");
    const button = element.shadowRoot.querySelector("button");

    expect(label.textContent).toBe("Escribe tu usuario");
    expect(input.placeholder).toBe("Tu usuario aqui");
    expect(button.textContent).toBe("Jugar");
  });
});

describe("User input", () => {
  it("should update user property when typing in input", async () => {
    const element = await fixture(html`<login-panel></login-panel>`);
    const input = element.shadowRoot.querySelector("input");

    input.value = "Jaime";
    input.dispatchEvent(new Event("input"));

    expect(element.user).toBe("Jaime");
  });
});

describe("handleInput function", () => {
  it("should update user property when handleInput is called", async () => {
    const element = await fixture(html`<login-panel></login-panel>`);
    const inputEvent = { target: { value: "Jaime" } };

    element.handleInput(inputEvent);

    expect(element.user).toBe("Jaime");
  });
});
