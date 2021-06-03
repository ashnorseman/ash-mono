import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { style } from './ash-button-group-css';

/**
 * Button group
 *
 * @slot
 */
@customElement('ash-button-group')
export class AshButtonGroup extends LitElement {
  public static styles = style;

  public render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ash-button-group': AshButtonGroup;
  }
}
