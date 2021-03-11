import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib60parentComponent } from './lib60parent.component';

describe('Lib60parentComponent', () => {
  let component: Lib60parentComponent;
  let fixture: ComponentFixture<Lib60parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib60parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib60parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
