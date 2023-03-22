/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Footer';

export default defineMessages({
  licenseMessage: {
    id: `${scope}.license.message`,
    defaultMessage: `The Avengers License governs the licensing terms for this project.`,
  },
  authorMessage: {
    id: `${scope}.author.message`,
    defaultMessage: `
      Crafted with care by Sanskar Khanna and Anchal Gupta.
    `,
  },
});
