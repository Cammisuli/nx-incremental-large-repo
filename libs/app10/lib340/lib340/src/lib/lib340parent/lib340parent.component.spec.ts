import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib340parentComponent } from './lib340parent.component';

describe('Lib340parentComponent', () => {
  let component: Lib340parentComponent;
  let fixture: ComponentFixture<Lib340parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib340parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib340parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
