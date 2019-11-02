import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirm-dialogue',
  templateUrl: './delete-confirm-dialogue.component.html',
  styleUrls: ['./delete-confirm-dialogue.component.scss']
})
export class DeleteConfirmDialogueComponent {

  constructor(
    // private dialog: MatDialog,
    //           public dialogRef,
    //           MatDialogueRef<DeleteConfirmDialogueComponent>,
              ) { }

  ngOnInit() {
  }

  openDeleteConfirmDialog() {
    
  }

  onDeleteCancel() {

  }

  onDeleteConfirmation() {
    
  }
}
