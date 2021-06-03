import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { AshTagType } from './types';
import { IAshTag } from './i-ash-tag';
import { style } from './ash-tag-css';

/**
 * Tag
 *
 * @csspart
 */
@customElement('ash-tag')
export class AshTag extends LitElement implements IAshTag {
  public static styles = style;

  /**
   * Specifies the icon of tag.
   */
  @property({ type: String })
  public icon = '';

  /**
   * Specifies that the tag is rounded-corner.
   */
  @property({ type: Boolean, reflect: true })
  public rounded = false;

  /**
   * Specifies the text of tag.
   */
  @property({ type: String })
  public text = '';

  /**
   * Specifies that the icon is at the end of tag.
   */
  @property({ type: Boolean, reflect: true })
  public trailing = false;

  /**
   * Specifies the type of tag.
   */
  @property({ type: String })
  public type: AshTagType = 'default';

  public render() {
    const icon = this.icon ? html`<span class="icon" part="icon">${this.icon}</span>` : null;

    return html` ${icon} ${this.text} `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ash-tag': AshTag;
  }
}
