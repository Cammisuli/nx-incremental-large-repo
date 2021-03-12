import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib139parentComponent } from './lib139parent.component';

describe('Lib139parentComponent', () => {
  let component: Lib139parentComponent;
  let fixture: ComponentFixture<Lib139parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib139parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib139parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
