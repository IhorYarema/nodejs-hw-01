import { PATH_DB } from '../constants/contacts.js';
import { writeFile } from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const jsonContacts = JSON.stringify(updatedContacts, null, 2);
    await writeFile(PATH_DB, jsonContacts, 'utf-8');
  } catch (error) {
    console.error('Error wtiting contacts:', error.message);
    throw error;
  }
};
