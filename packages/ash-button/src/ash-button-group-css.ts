import { css } from 'lit';

export const style = css`
  :host {
    display: inline-flex;
    flex-wrap: nowrap;
    vertical-align: middle;
  }

  ::slotted(ash-button:hover) {
    position: relative;
  }

  ::slotted(ash-button:not(:first-child)) {
    --button-radius-left: 0;
    margin-left: -1px;
  }

  ::slotted(ash-button:not(:last-child)) {
    --button-radius-right: 0;
  }
`;
