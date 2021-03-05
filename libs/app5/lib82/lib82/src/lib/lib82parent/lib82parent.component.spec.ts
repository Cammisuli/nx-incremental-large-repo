import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib82parentComponent } from './lib82parent.component';

describe('Lib82parentComponent', () => {
  let component: Lib82parentComponent;
  let fixture: ComponentFixture<Lib82parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib82parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib82parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
