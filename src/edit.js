import { __ } from '@wordpress/i18n';
import './editor.scss';
export default function Edit({ className }) {
  return (
    <p className={className}>
      {__('Snowblocks – hello from the editor!', 'snowblocks')}
    </p>
  );
}
