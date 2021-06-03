import { css } from 'lit';

export const style = css`
  :host {
    --input-divider: var(--color-dark-blue-10);
    --input-height: var(--control-height);
    --input-icon-margin: calc(var(--control-padding) - 2px);
    --input-icon-size: var(--control-icon-size);
    --input-label-margin: var(--control-padding);
    --input-padding: var(--control-padding);
    --input-placeholder: var(--color-dark-blue-40);
    --input-radius: var(--control-radius);
    --input-text-size: var(--text-sm-size);
    --input-bg: var(--color-white);
    --input-border: var(--color-dark-blue-20);
    --input-shadow: var(--shadow-light);
    --input-text: var(--color-dark-blue);
    --input-hover-bg: var(--color-white);
    --input-hover-border: var(--color-dark-blue-20);
    --input-hover-shadow: var(--shadow-outline);
    --input-hover-text: var(--color-dark-blue);
    --input-active-bg: var(--color-white);
    --input-active-border: var(--color-blue);
    --input-active-shadow: none;
    --input-active-text: var(--color-dark-blue);
    --input-disabled-bg: var(--color-dark-blue-3);
    --input-disabled-border: var(--color-dark-blue-10);
    --input-disabled-shadow: var(--shadow-light);
    --input-disabled-text: var(--color-dark-blue-20);
    --input-invalid-bg: var(--color-white);
    --input-invalid-border: var(--color-red-20);
    --input-invalid-shadow: none;
    --input-invalid-text: var(--color-red);
    display: inline-block;
    vertical-align: middle;
  }

  input {
    all: unset;
    background: var(--input-bg);
    border: 1px solid var(--input-border);
    border-radius: var(--input-radius);
    box-shadow: var(--input-shadow);
    box-sizing: border-box;
    color: var(--input-text);
    display: block;
    font-size: var(--input-text-size);
    height: var(--input-height);
    padding: 0 var(--input-padding);
    transition: all var(--transition-duration) ease-in-out;
    width: 100%;
  }
  input:enabled:hover {
    --input-bg: var(--input-hover-bg);
    --input-border: var(--input-hover-border);
    --input-shadow: var(--input-hover-shadow);
    --input-text: var(--input-hover-text);
  }
  input:enabled:focus {
    --input-bg: var(--input-active-bg);
    --input-border: var(--input-active-border);
    --input-shadow: var(--input-active-shadow);
    --input-text: var(--input-active-text);
  }
  input:disabled {
    cursor: not-allowed;
    --input-bg: var(--input-disabled-bg);
    --input-border: var(--input-disabled-border);
    --input-shadow: var(--input-disabled-shadow);
    --input-text: var(--input-disabled-text);
  }
  :host(:invalid) input {
    --input-bg: var(--input-invalid-bg);
    --input-border: var(--input-invalid-border);
    --input-shadow: var(--input-invalid-shadow);
    --input-text: var(--input-invalid-text);
  }

  ::placeholder {
    color: var(--input-placeholder);
  }
`;
