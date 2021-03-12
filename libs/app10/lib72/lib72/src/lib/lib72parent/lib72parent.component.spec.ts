import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib72parentComponent } from './lib72parent.component';

describe('Lib72parentComponent', () => {
  let component: Lib72parentComponent;
  let fixture: ComponentFixture<Lib72parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib72parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib72parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
