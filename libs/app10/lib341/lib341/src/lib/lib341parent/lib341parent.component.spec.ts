import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib341parentComponent } from './lib341parent.component';

describe('Lib341parentComponent', () => {
  let component: Lib341parentComponent;
  let fixture: ComponentFixture<Lib341parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib341parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib341parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
