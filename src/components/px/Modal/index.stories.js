import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, number, boolean } from '@storybook/addon-knobs/react';

import Modal from './';

storiesOf('Modal', module)
	.addDecorator(withKnobs)
	.add('default', () => (
		<Modal
			headerText={text('headerText', 'Confirm delete')}
			acceptText={text('acceptText', 'Permanently  Delete Record')}
			rejectText={text('rejectText', 'Cancel')}
			onBackdropClick={action('onBackdropClick')}
			opened={boolean('opened', true)}>
			{text('content', 'Do you want to delete this record? The record will be deleted permanently.')}
  	</Modal>

	));
