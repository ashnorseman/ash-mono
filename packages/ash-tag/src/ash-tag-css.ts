import { css } from 'lit';

export const style = css`
  :host {
    --tag-bg: var(--color-blue-10);
    --tag-height: var(--control-height);
    --tag-icon-margin: calc(var(--control-padding) - 2px);
    --tag-padding: var(--control-padding);
    --tag-radius: var(--control-radius-lg);
    --tag-text: var(--color-blue);
    --tag-text-size: var(--text-sm-size);
    background: var(--tag-bg);
    border-radius: var(--tag-radius);
    color: var(--tag-text);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: var(--tag-text-size);
    height: var(--tag-height);
    line-height: 1;
    padding: 0 var(--tag-padding);
    vertical-align: middle;
    white-space: nowrap;
  }

  :host([rounded]) {
    border-radius: calc(var(--control-height) / 2);
  }

  .icon {
    font-family: 'Material Icons', sans-serif;
    margin-right: var(--tag-icon-margin);
  }
  :host([trailing]) .icon {
    order: 1;
    margin-left: var(--tag-icon-margin);
    margin-right: 0;
  }
`;
