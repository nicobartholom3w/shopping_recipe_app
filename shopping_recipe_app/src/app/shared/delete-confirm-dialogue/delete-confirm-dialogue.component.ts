import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-delete-confirm-dialogue',
  templateUrl: './delete-confirm-dialogue.component.html',
  styleUrls: ['./delete-confirm-dialogue.component.scss']
})
export class DeleteConfirmDialogueComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDeleteConfirmDialog() {
    
  }
}
