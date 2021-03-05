import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18parentComponent } from './lib18parent.component';

describe('Lib18parentComponent', () => {
  let component: Lib18parentComponent;
  let fixture: ComponentFixture<Lib18parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib18parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
