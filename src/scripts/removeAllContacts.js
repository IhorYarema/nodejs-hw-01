import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('All contacts deleted.');
  } catch (error) {
    console.error('Error:', error.message);
  }
};

removeAllContacts();
