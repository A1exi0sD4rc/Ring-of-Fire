import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GameData } from '../game.service';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogeAddPlayerComponent } from '../dialoge-add-player/dialoge-add-player.component';
import { GameInfoComponent } from '../game-info/game-info.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButtonModule, MatIconModule, MatDialogModule, GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})


export class GameComponent {
  pickCardAnimation = false;
  animationReady = false;
  removeCard = false;
  currentCard: string = '';
  gameData = inject(GameData);
  currentCardPosition = 80;
  playedCardPosition = 280;
  removedCardPosition = 151;

  constructor(public dialog: MatDialog) {
    this.newGame();
  }

  newGame() {
    console.log(this.gameData);
  }

  takeCard() {
    if (!this.animationReady) {
      let card = this.gameData.stack.pop();

      if (card != undefined) {
        this.currentCard = card;
      }
      this.animationReady = true
      this.pickCardAnimation = true;
      this.changePositionStack();
      setTimeout(() => {
        this.pickCardAnimation = false;
        this.removeCard = true;
      }, 2000);
      setTimeout(() => {
        this.removeCard = false;
        this.gameData.playedCards.push(this.currentCard);
        this.changePositionCards();
        this.gameData.currentPlayer++;
        this.gameData.currentPlayer = this.gameData.currentPlayer % this.gameData.players.length;
        this.animationReady = false;
      }, 3000);
    }
  }

  changePositionStack() {
    this.currentCardPosition -= 1.5;
  }

  changePositionCards() {
    this.playedCardPosition += 1.5;
    this.removedCardPosition -= 1.5;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogeAddPlayerComponent);

    dialogRef.afterClosed().subscribe(name => {
      if (name && name.length > 0) {
        this.gameData.players.push(name);  
      }   
    });
  }
}
