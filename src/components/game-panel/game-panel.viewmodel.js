import { LitElement } from "lit";

export class GamePanelViewmodel extends LitElement {
  static get properties() {
    return {
      /**
       * The nums of columns.
       */
      columns: { type: Number },

      /**
       * The nums of rows.
       */
      rows: { type: Number },
    };
  }

  constructor() {
    super();
    this.columns = 3;
    this.rows = 3;
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    this.style.setProperty("--grid-columns", this.columns);
    this.style.setProperty("--grid-rows", this.rows);
  }
}
