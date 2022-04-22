import { User } from './../../user';
import { UserEditModalComponent } from '../user-edit-modal/user-edit-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserStore } from 'src/app/user.store';
import { map } from 'rxjs';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    private userStore: UserStore,
    public dialog: MatDialog
  ) { }

  users: User[] = [];

  mode = 'list';

  ngOnInit(): void {
    this.userStore.users$.subscribe(users => {
      console.log('subscriber call');
      this.users = users;
    });
    this.userStore.getUsers();
  }

  openAddUserModal(): void {
    let dialogRef = this.dialog.open(UserEditModalComponent, {
      data: {userID: null},
    });
    dialogRef.componentInstance.modalSaveCompleted.subscribe(() => {
      dialogRef.close();
    });
  }

}