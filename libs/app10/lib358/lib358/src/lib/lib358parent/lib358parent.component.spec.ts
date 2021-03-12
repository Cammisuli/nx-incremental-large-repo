import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib358parentComponent } from './lib358parent.component';

describe('Lib358parentComponent', () => {
  let component: Lib358parentComponent;
  let fixture: ComponentFixture<Lib358parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib358parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib358parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
