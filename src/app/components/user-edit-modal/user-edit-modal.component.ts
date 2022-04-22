import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Component, EventEmitter, OnInit, Output, Inject } from '@angular/core';

export interface ModalData {
  userID: Number | null;
}

@Component({
  selector: 'app-user-edit-modal',
  templateUrl: './user-edit-modal.component.html',
  styleUrls: ['./user-edit-modal.component.css']
})
export class UserEditModalComponent implements OnInit {

  @Output() modalSaveCompleted = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<UserEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
  ) {}

  ngOnInit(): void {
  }

  public saveCompleted(): void {
    this.modalSaveCompleted.emit();
  }

}
