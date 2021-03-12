import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib135parentComponent } from './lib135parent.component';

describe('Lib135parentComponent', () => {
  let component: Lib135parentComponent;
  let fixture: ComponentFixture<Lib135parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib135parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib135parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
