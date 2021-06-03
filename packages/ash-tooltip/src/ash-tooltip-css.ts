import { css } from 'lit';

export const style = css`
  :host {
    --tooltip-margin: var(--control-padding);
    --tooltip-padding-v: 2px;
    --tooltip-padding-h: var(--control-padding);
    --tooltip-radius: var(--control-radius);
    --tooltip-text-line-height: var(--text-sm-height);
    --tooltip-text-size: var(--text-sm-size);
    display: none;
    position: relative;
  }

  :host([opened]) {
    display: block;
  }

  :host([theme='dark']) {
    --tooltip-bg: var(--color-dark-blue);
    --tooltip-shadow: none;
    --tooltip-text: var(--color-white);
  }

  :host([theme='primary']) {
    --tooltip-bg: var(--color-blue);
    --tooltip-shadow: none;
    --tooltip-text: var(--color-white);
  }

  :host([theme='light']) {
    --tooltip-bg: var(--color-white);
    --tooltip-shadow: var(--shadow);
    --tooltip-text: var(--color-dark-blue-60);
  }

  .tooltip {
    background: var(--tooltip-bg);
    border-radius: var(--tooltip-radius);
    box-shadow: var(--tooltip-shadow);
    color: var(--tooltip-text);
    font-size: var(--tooltip-text-size);
    line-height: var(--tooltip-text-line-height);
    padding: var(--tooltip-padding-v) var(--tooltip-padding-h);
    position: absolute;
    width: max-content;
  }
  :host([position='top']) .tooltip {
    transform: translate3d(-50%, calc(-100% - var(--tooltip-margin)), 0);
  }
  :host([position='bottom']) .tooltip {
    transform: translate3d(-50%, var(--tooltip-margin), 0);
  }
  :host([position='left']) .tooltip {
    transform: translate3d(calc(-100% - var(--tooltip-margin)), -50%, 0);
  }
  :host([position='right']) .tooltip {
    transform: translate3d(var(--tooltip-margin), -50%, 0);
  }
`;
