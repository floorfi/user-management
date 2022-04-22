import { UserStore } from 'src/app/user.store';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../user';
import { Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  @Input() userID: Number | null = null;
  @Output() saveCompleted = new EventEmitter();

  constructor(
    private userStore: UserStore,
    private formBuilder: FormBuilder
  ) { }

  user: User = {
    id: null,
    salutation: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    birthDate: new Date()
  }

  userForm = this.formBuilder.group({
    salutation: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    emailAddress: ['', {validators: [Validators.required, Validators.email]}],
    birthDate: ['', Validators.required]
  })

  ngOnInit(): void {
    if(this.userID) {
      this.userStore.getUserById(this.userID).then(user => {
        this.user = user;

        this.userForm.setValue({
          salutation: this.user.salutation,
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          emailAddress: this.user.emailAddress,
          birthDate: this.user.birthDate
        })
      })
    }

  }

  save(): void {
    this.user.salutation = this.userForm.get('salutation')?.value;
    this.user.firstName = this.userForm.get('firstName')?.value;
    this.user.lastName = this.userForm.get('lastName')?.value;
    this.user.emailAddress = this.userForm.get('emailAddress')?.value;
    this.user.birthDate = this.userForm.get('birthDate')?.value;

    if(this.user.id === null) {
      this.userStore.createUser(this.user);
    } else {
      this.userStore.updateUser(this.user);
    }

    this.saveCompleted.emit();
  }
}
