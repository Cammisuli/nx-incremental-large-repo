import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib182parentComponent } from './lib182parent.component';

describe('Lib182parentComponent', () => {
  let component: Lib182parentComponent;
  let fixture: ComponentFixture<Lib182parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib182parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib182parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
