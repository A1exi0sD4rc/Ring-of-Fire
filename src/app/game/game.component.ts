import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GameData } from '../game.service';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogeAddPlayerComponent } from '../dialoge-add-player/dialoge-add-player.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})


export class GameComponent {
  pickCardAnimation = false;
  removeCard = false;
  currentCard: string = '';
  currentCardPosition = 80;
  playedCardPosition = 280;
  gameData = inject(GameData);

  constructor(public dialog: MatDialog) {
    this.newGame();
  }

  newGame() {
    console.log(this.gameData);
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      let card = this.gameData.stack.pop();

      if (card != undefined) {
        this.currentCard = card;
      }
      this.pickCardAnimation = true;
      setTimeout(() => {
        this.pickCardAnimation = false;
        this.removeCard = true;
      }, 2000);
      setTimeout(() => {
        this.removeCard = false;
        this.gameData.playedCards.push(this.currentCard);
        this.changePosition();
      }, 3000);
    }
  }

  changePosition() {
    this.currentCardPosition -= 1.5;
    this.playedCardPosition += 1.5;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogeAddPlayerComponent);

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
