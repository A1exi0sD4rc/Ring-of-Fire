import { DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dialoge-add-player',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose
  ],
  templateUrl: './dialoge-add-player.component.html',
  styleUrl: './dialoge-add-player.component.scss'
})
export class DialogeAddPlayerComponent {
  name: string = '';

  constructor(private dialogRef: MatDialogRef<DialogeAddPlayerComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
