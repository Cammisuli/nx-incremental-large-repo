import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib93parentComponent } from './lib93parent.component';

describe('Lib93parentComponent', () => {
  let component: Lib93parentComponent;
  let fixture: ComponentFixture<Lib93parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib93parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib93parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
