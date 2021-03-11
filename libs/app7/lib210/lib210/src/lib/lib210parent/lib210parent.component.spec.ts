import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib210parentComponent } from './lib210parent.component';

describe('Lib210parentComponent', () => {
  let component: Lib210parentComponent;
  let fixture: ComponentFixture<Lib210parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib210parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib210parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
