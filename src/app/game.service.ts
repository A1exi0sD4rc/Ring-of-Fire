import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class GameData {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push('ace_' + i);
            this.stack.push('clubs_' + i);
            this.stack.push('diamonds_' + i);
            this.stack.push('hearts_' + i);
        }

        this.shuffleArray(this.stack);
    }

    shuffleArray(array: string[]) {
        let m = array.length, t, i;

        while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    }
}