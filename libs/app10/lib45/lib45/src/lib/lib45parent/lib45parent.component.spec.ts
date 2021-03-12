import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib45parentComponent } from './lib45parent.component';

describe('Lib45parentComponent', () => {
  let component: Lib45parentComponent;
  let fixture: ComponentFixture<Lib45parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib45parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib45parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
