import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacToeExampleComponent } from './tic-tac-toe-example.component';

describe('TicTacToeExampleComponent', () => {
  let component: TicTacToeExampleComponent;
  let fixture: ComponentFixture<TicTacToeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicTacToeExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicTacToeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
