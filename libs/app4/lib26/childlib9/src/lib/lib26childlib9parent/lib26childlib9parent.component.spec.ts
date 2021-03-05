import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26childlib9parentComponent } from './lib26childlib9parent.component';

describe('Lib26childlib9parentComponent', () => {
  let component: Lib26childlib9parentComponent;
  let fixture: ComponentFixture<Lib26childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib26childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
