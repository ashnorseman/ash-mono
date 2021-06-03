import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { AshTooltipPosition, AshTooltipTheme } from './types';
import { IAshTooltip } from './i-ash-tooltip';
import { style } from './ash-tooltip-css';

/**
 * Tooltip
 *
 * @slot
 */
@customElement('ash-tooltip')
export class AshTooltip extends LitElement implements IAshTooltip {
  public static styles = style;

  /**
   * Specifies that the tooltip is opened.
   */
  @property({ type: Boolean, reflect: true })
  public opened = false;

  /**
   * Specifies that the position of the tooltip based on trigger element.
   */
  @property({ type: String, reflect: true })
  public position: AshTooltipPosition = 'top';

  /**
   * Specifies the theme of tooltip.
   */
  @property({ type: String, reflect: true })
  public theme: AshTooltipTheme = 'dark';

  public render() {
    return html` <div class="tooltip"><slot></slot></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ash-tooltip': AshTooltip;
  }
}
