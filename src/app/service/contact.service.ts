import { Contact } from './../model/contact';
import { Injectable } from '@angular/core';


@Injectable()
export class ContactService {

  // _contactList: Contact[{ ID:1, FirstName:'Arruel', LastName:'Cida', Email:'Savenal@dder.com'}] ;
  _contactList: any[] = [
{ ID: 1, FirstName: 'Arruel', LastName: 'ttttt', Email: 'tttt@dder.com', Contact: '11949648052'}
, { ID: 2, FirstName: 'mari', LastName: 'vvvvv', Email: 'rrrr@dder.com', Contact: '02198767890'}
, { ID: 3, FirstName: 'pitero', LastName: 'rrrrr', Email: 'eeee@dder.com', Contact: '11949648052'}
, { ID: 4, FirstName: 'carian', LastName: 'eeee', Email: 'xxx@dder.com', Contact: '11949648052'}
, { ID: 5, FirstName: 'retoin', LastName: 'sssss', Email: 'wwww@dder.com', Contact: '11949648052'}
, { ID: 6, FirstName: 'bulk', LastName: 'xxxx', Email: 'vvvvv@dder.com', Contact: '11949648052'}
, { ID: 7, FirstName: 'xder', LastName: 'ssaa', Email: 'vvvvv@dder.com', Contact: '1234567890'}
, { ID: 8, FirstName: 'trey', LastName: 'dderet', Email: 'vvvvv@dder.com', Contact: '11234567'}
, { ID: 9, FirstName: 'iuyjk', LastName: 'gtyuu', Email: 'vvvvv@dder.com', Contact: '11444444'}
];
  constructor() { }

  addContact(contact: Contact) {
    contact.ID = this._contactList.length + 1;
    this._contactList.push(contact);
  }

  editContact(contact: Contact) {
    const index = this._contactList.findIndex(c => c.ID === contact.ID);
    this._contactList[index] = contact;
  }

  deleteContact(id: number) {
    const contact = this._contactList.findIndex(c => c.ID === id);
    this._contactList.splice(contact, 1);
  }

  getAllContacts() {
    return this._contactList;
  }
}
