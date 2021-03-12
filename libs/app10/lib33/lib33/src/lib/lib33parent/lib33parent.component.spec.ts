import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib33parentComponent } from './lib33parent.component';

describe('Lib33parentComponent', () => {
  let component: Lib33parentComponent;
  let fixture: ComponentFixture<Lib33parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib33parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib33parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
