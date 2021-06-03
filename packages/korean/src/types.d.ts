import { IAshButton } from 'ash-button';
import { IAshTag } from 'ash-tag';
import { IAshTextInput } from 'ash-text-input';
import { IAshTooltip } from 'ash-tooltip';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ash-button': IAshButton;
      'ash-button-group': any;
      'ash-tag': IAshTag;
      'ash-text-input': IAshTextInput;
      'ash-tooltip': IAshTooltip;
      'ash-tooltip-container': any;
    }
  }
}
