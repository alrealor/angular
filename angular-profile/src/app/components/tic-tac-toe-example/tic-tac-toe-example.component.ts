import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-tic-tac-toe-example',
  template: `
    <h1>Tic-Tac-Toe</h1>
    <mat-divider></mat-divider>
    <br>
    <div id="statusArea" className="status">Next player: <span> {{ playerInTurn }} </span></div>
    <br>
    <div id="winnerArea" className="winner">Winner: <span> {{ winner }} </span></div>
    <br>
    <button (click)="resetGame()">Reset</button>
    <br><br>
    <section>
      <div class="row" *ngFor="let row of [1, 2, 3]; let r = index">
        <button id="btn{{r}}{{c}}" *ngFor="let col of [1, 2, 3]; let c = index" class="square" style="width:40px;height:40px;"
                 (click)="nextTurn($event)">
        </button>
      </div>
    </section>
    <br>

  `,
  styles: []
})
export class TicTacToeExampleComponent implements OnInit {

  playerInTurn: string = 'X';
  turn: number = 0;
  winner: string = '';

  // code goes here
  ngOnInit() {
  }

  /* Function that set the next movement being an X or O given a button event */
  nextTurn(event: Event) {
    let id: string = (event.target as Element).id;
    document.getElementById(id)!.textContent = this.playerInTurn;
    document.getElementById(id)!.setAttribute('disabled', 'disabled');
    if (this.turn > 3) {
      this.verifyBoard(id, this.playerInTurn);
    }
    this.playerInTurn = this.playerInTurn === 'X' ? 'O' : this.playerInTurn === 'O'? 'X' : this.playerInTurn;
    this.turn++;
  }

  // verify board to determine a winner player given a button selected ID and player in turn
  verifyBoard(btnId: string, playerInTurn:string) {
    // get board positions
    const pos00 = document.getElementById('btn00')!.textContent;
    const pos01 = document.getElementById('btn01')!.textContent;
    const pos02 = document.getElementById('btn02')!.textContent;
    const pos10 = document.getElementById('btn10')!.textContent;
    const pos11 = document.getElementById('btn11')!.textContent;
    const pos12 = document.getElementById('btn12')!.textContent;
    const pos20 = document.getElementById('btn20')!.textContent;
    const pos21 = document.getElementById('btn21')!.textContent;
    const pos22 = document.getElementById('btn22')!.textContent;

    // winner by rows
    if ( (pos00 == playerInTurn && pos01 == playerInTurn && pos02 == playerInTurn)
        || (pos10 == playerInTurn && pos11 == playerInTurn && pos12 == playerInTurn)
        || (pos20 == playerInTurn && pos21 == playerInTurn && pos22 == playerInTurn)) {
      this.winner = 'Player ' + playerInTurn;
      // disable borad when a winner exists
      this.disableBoard();
    }

    // winner by columns
    if ( (pos00 == playerInTurn && pos10 == playerInTurn && pos20 == playerInTurn)
        || (pos01 == playerInTurn && pos11 == playerInTurn && pos21 == playerInTurn)
        || (pos02 == playerInTurn && pos12 == playerInTurn && pos22 == playerInTurn)) {
      this.winner = 'Player ' + playerInTurn;
      // disable borad when a winner exists
      this.disableBoard();
    }

    // winner by diagonal
    if ( (pos00 == playerInTurn && pos11 == playerInTurn && pos22 == playerInTurn)
        || (pos02 == playerInTurn && pos11 == playerInTurn && pos20 == playerInTurn)) {
      this.winner = 'Player ' + playerInTurn;
      // disable borad when a winner exists
      this.disableBoard();
    }
  }

  // disable board
  disableBoard() {
      for(let i=0; i<3; i++) {
        for(let j=0; j<3; j++) {
          document.getElementById('btn' + i + j)!.setAttribute('disabled', 'disabled');
        }
      }
  }

  // reset board and game data
  resetGame() {
    for(let i=0; i<3; i++) {
      for(let j=0; j<3; j++) {
        document.getElementById('btn' + i + j)!.textContent = '';
        document.getElementById('btn' + i + j)!.removeAttribute('disabled');
      }
    }
    this.winner = 'None';
    this.playerInTurn = 'X';
  }

}
