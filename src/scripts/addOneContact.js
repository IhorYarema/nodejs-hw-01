import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();

    const oneNewContact = createFakeContact();

    const updatedContacts = [...existingContacts, oneNewContact];

    await writeContacts(updatedContacts);

    console.log(
      `$One new contact successfully generated and added to the database.`,
    );
  } catch (error) {
    console.error('Failed to generate contact:', error.message);
  }
};

addOneContact();
