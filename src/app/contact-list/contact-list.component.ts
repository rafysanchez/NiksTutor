import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ContactService } from '../service/contact.service';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  isPopupOpened = true;

  constructor(
    private dialog?: MatDialog,
    private _contactService?: ContactService
  ) {}

  ngOnInit() {}

  get ContactList() {
    return this._contactService.getAllContacts();
  }

  addContact() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(ContactComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      // debugger
      console.log(result.json());
      this.isPopupOpened = false;
    });
  }

  editContact(id: number) {
    // debugger
    console.log(id);
    this.isPopupOpened = true;
    const contact = this._contactService
      .getAllContacts()
      .find(c => c.ID === id);
    const dialogRef = this.dialog.open(ContactComponent, {
      data: contact
    });

    dialogRef.afterClosed().subscribe(result => {
      // tslint:disable-next-line:no-debugger
      debugger;
      // console.log(result.value);
      this.isPopupOpened = false;
    });
  }

  deleteContact(id: number) {
    if (confirm('Excluir?')) {
      this._contactService.deleteContact(id);
    }
  }
}
