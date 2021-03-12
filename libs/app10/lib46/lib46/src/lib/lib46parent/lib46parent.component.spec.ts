import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib46parentComponent } from './lib46parent.component';

describe('Lib46parentComponent', () => {
  let component: Lib46parentComponent;
  let fixture: ComponentFixture<Lib46parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib46parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib46parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
