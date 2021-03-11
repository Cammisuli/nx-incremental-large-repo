import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib125parentComponent } from './lib125parent.component';

describe('Lib125parentComponent', () => {
  let component: Lib125parentComponent;
  let fixture: ComponentFixture<Lib125parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib125parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib125parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
