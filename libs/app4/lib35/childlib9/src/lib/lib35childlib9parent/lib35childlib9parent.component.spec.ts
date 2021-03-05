import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib35childlib9parentComponent } from './lib35childlib9parent.component';

describe('Lib35childlib9parentComponent', () => {
  let component: Lib35childlib9parentComponent;
  let fixture: ComponentFixture<Lib35childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib35childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib35childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
