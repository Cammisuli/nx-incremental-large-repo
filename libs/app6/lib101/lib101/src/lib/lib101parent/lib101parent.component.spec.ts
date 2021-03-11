import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib101parentComponent } from './lib101parent.component';

describe('Lib101parentComponent', () => {
  let component: Lib101parentComponent;
  let fixture: ComponentFixture<Lib101parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib101parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib101parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
