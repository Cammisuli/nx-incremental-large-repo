import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib59parentComponent } from './lib59parent.component';

describe('Lib59parentComponent', () => {
  let component: Lib59parentComponent;
  let fixture: ComponentFixture<Lib59parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib59parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib59parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
