import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogeAddPlayerComponent } from './dialoge-add-player.component';

describe('DialogeAddPlayerComponent', () => {
  let component: DialogeAddPlayerComponent;
  let fixture: ComponentFixture<DialogeAddPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogeAddPlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogeAddPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
