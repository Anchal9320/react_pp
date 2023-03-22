/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'Launch your next React project in mere seconds.',
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage:
      'A foundation with a strong focus on scalability, offline-first capabilities, exceptional developer experience, high performance, and adherence to best practices.',
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Give me a chance!',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Display Github repositories sorted by:',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
});
