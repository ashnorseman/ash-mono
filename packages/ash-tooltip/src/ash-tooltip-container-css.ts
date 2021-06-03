import { css } from 'lit';

export const style = css`
  :host {
    cursor: pointer;
    display: inline-block;
    position: relative;
    vertical-align: middle;
  }

  ::slotted(ash-tooltip) {
    position: absolute;
  }

  ::slotted(ash-tooltip[position='top']) {
    left: 50%;
    bottom: 100%;
  }

  ::slotted(ash-tooltip[position='bottom']) {
    left: 50%;
  }

  ::slotted(ash-tooltip[position='left']) {
    top: 50%;
  }

  ::slotted(ash-tooltip[position='right']) {
    left: 100%;
    top: 50%;
  }
`;
