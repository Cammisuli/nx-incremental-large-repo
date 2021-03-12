import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib320parentComponent } from './lib320parent.component';

describe('Lib320parentComponent', () => {
  let component: Lib320parentComponent;
  let fixture: ComponentFixture<Lib320parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib320parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib320parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
