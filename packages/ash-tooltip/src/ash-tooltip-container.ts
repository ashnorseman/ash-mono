import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { AshTooltip } from './ash-tooltip';
import { style } from './ash-tooltip-container-css';

/**
 * Tooltip container
 *
 * @slot
 */
@customElement('ash-tooltip-container')
export class AshTooltipContainer extends LitElement {
  public static styles = style;

  public get tooltip(): AshTooltip | null {
    return this.querySelector('ash-tooltip') || null;
  }

  public connectedCallback() {
    super.connectedCallback();

    this.addEventListener('mouseenter', this.showTooltip, false);
    this.addEventListener('mouseleave', this.hideTooltip, false);
  }

  public render() {
    return html`<slot></slot>`;
  }

  private hideTooltip() {
    if (this.tooltip) {
      this.tooltip.opened = false;
    }
  }

  private showTooltip() {
    if (this.tooltip) {
      this.tooltip.opened = true;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ash-tooltip-container': AshTooltipContainer;
  }
}
