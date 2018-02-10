import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContactService } from '../service/contact.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public _contactForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
  private dialogRef: MatDialogRef<ContactComponent>,
  private _contactService: ContactService,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
   }

  ngOnInit() {
    this._contactForm = this._formBuilder.group({
      ID: [],
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      Contact: ['', [Validators.required]],
      Email: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this._contactService.addContact(this._contactForm.value);
    this.dialogRef.close();
  }

}
