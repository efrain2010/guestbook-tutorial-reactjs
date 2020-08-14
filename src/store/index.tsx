import { createStore } from 'easy-peasy';
import Store from '../interfaces/Store';
import GuestBook from './GuestBook';

const store = {
  guestbook: GuestBook,
};

export default createStore<Store>(store);
