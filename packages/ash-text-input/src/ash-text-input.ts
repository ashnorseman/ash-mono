import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined';

import { IAshTextInput } from './i-ash-text-input';
import { style } from './ash-text-input-css';

/**
 * Input
 *
 * @csspart
 */
@customElement('ash-text-input')
export class AshTextInput extends LitElement implements IAshTextInput {
  public static formAssociated = true;
  public static styles = style;

  @query('input')
  private inputElement!: HTMLInputElement;

  /**
   * Specifies that a text input should be disabled.
   */
  @property({ type: Boolean })
  public disabled = false;

  /**
   * Specifies the max length of value.
   */
  @property({ type: Number })
  public maxLength!: number;

  /**
   * Specifies the min length of value.
   */
  @property({ type: Number })
  public minLength!: number;

  /**
   * Specifies the regexp pattern of value.
   */
  @property({ type: String })
  public pattern!: string;

  /**
   * Specifies the placeholder pattern of input.
   */
  @property({ type: String })
  public placeholder!: string;

  /**
   * Specifies that a text input should be readonly.
   */
  @property({ type: Boolean })
  public readOnly = false;

  /**
   * Specifies that a text input is required.
   */
  @property({ type: Boolean })
  public required = false;

  @property({ type: String })
  public get value(): string {
    return this._value;
  }

  public set value(value: string) {
    this._value = value;
  }

  public get validationMessage() {
    return this._internals.validationMessage;
  }

  public get validity() {
    return this._internals.validity;
  }

  public get willValidate() {
    return this._internals.willValidate;
  }

  private _internals: any;
  private _value = '';

  public constructor() {
    super();
    this._internals = (this as any).attachInternals();
  }

  public checkValidity() {
    return this._internals.checkValidity();
  }

  public reportValidity() {
    return this._internals.reportValidity();
  }

  public render() {
    return html`<input
      part="input"
      type="text"
      ?disabled="${this.disabled}"
      ?readOnly="${this.readOnly}"
      ?required="${this.required}"
      .value="${this.value}"
      maxlength="${ifDefined(this.maxLength)}"
      minlength="${ifDefined(this.minLength)}"
      pattern="${ifDefined(this.pattern)}"
      placeholder="${ifDefined(this.placeholder)}"
      @input="${this.updateValue}"
    />`;
  }

  /**
   * Update input value
   * @private
   */
  private updateValue() {
    this.value = this.inputElement.value;

    if (this.inputElement.matches(':invalid')) {
      this._internals.setValidity(
        {
          customError: true
        },
        'Invalid'
      );
    } else {
      this._internals.setValidity({});
    }

    this._internals.setFormValue(this.value);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ash-text-input': AshTextInput;
  }
}
