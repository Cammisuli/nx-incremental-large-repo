import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib188parentComponent } from './lib188parent.component';

describe('Lib188parentComponent', () => {
  let component: Lib188parentComponent;
  let fixture: ComponentFixture<Lib188parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib188parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib188parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
