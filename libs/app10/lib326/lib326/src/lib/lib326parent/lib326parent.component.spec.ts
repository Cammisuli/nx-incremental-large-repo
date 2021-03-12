import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib326parentComponent } from './lib326parent.component';

describe('Lib326parentComponent', () => {
  let component: Lib326parentComponent;
  let fixture: ComponentFixture<Lib326parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib326parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib326parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
