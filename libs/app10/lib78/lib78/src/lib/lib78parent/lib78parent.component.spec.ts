import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib78parentComponent } from './lib78parent.component';

describe('Lib78parentComponent', () => {
  let component: Lib78parentComponent;
  let fixture: ComponentFixture<Lib78parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib78parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib78parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
