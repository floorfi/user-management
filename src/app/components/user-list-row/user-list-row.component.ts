import { MatDialog } from '@angular/material/dialog';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../user';
import { UserEditModalComponent } from '../user-edit-modal/user-edit-modal.component';
import { UserStore } from 'src/app/user.store';


@Component({
  selector: 'app-user-list-row',
  templateUrl: './user-list-row.component.html',
  styleUrls: ['./user-list-row.component.css']
})
export class UserListRowComponent implements OnInit {

  @Input() user!: User;
  @Output() userChanged = new EventEmitter();

  constructor(
    private userStore: UserStore,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  delete(user: User): void {
    this.userStore.deleteUser(user);
  }

  openEditUserModal(userID: Number | null): void {
    let dialogRef = this.dialog.open(UserEditModalComponent, {
      data: {userID: userID},
    });
    dialogRef.componentInstance.modalSaveCompleted.subscribe(() => {
      dialogRef.close();
    });
  }
}
