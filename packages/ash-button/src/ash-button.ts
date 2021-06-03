import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { AshButtonTheme, AshButtonType } from './types';
import { IAshButton } from './i-ash-button';
import { style } from './ash-button-css';

/**
 * Button
 *
 * @csspart
 */
@customElement('ash-button')
export class AshButton extends LitElement implements IAshButton {
  public static styles = style;

  /**
   * Specifies that a button's display should be block.
   */
  @property({ type: Boolean, reflect: true })
  public block = false;

  /**
   * Specifies that a button should be disabled.
   */
  @property({ type: Boolean })
  public disabled = false;

  /**
   * Specifies that a button opens a dropdown.
   */
  @property({ type: Boolean })
  public dropdown = false;

  /**
   * Specifies the icon of button.
   */
  @property({ type: String })
  public icon = '';

  /**
   * Specifies the label of button.
   */
  @property({ type: String })
  public label = '';

  /**
   * Specifies the text of button.
   */
  @property({ type: String })
  public text = '';

  /**
   * Specifies the theme of button.
   */
  @property({ type: String, reflect: true })
  public theme: AshButtonTheme = 'default';

  /**
   * Specifies that the icon is at the end of button.
   */
  @property({ type: Boolean, reflect: true })
  public trailing = false;

  /**
   * Specifies the type of button.
   */
  @property({ type: String })
  public type: AshButtonType = 'button';

  public render() {
    const icon = this.icon ? html`<span class="icon" part="icon">${this.icon}</span>` : null;

    const label = this.label ? html`<span class="label" part="label">${this.label}</span>` : null;

    const dropdown = this.dropdown ? html`<span class="dropdown" part="dropdown">expand_more</span>` : null;

    return html`
      <button ?disabled="${this.disabled}" .type="${this.type}" part="button">
        ${icon} ${this.text} ${label} ${dropdown}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ash-button': AshButton;
  }
}
