import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib354parentComponent } from './lib354parent.component';

describe('Lib354parentComponent', () => {
  let component: Lib354parentComponent;
  let fixture: ComponentFixture<Lib354parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib354parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib354parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
