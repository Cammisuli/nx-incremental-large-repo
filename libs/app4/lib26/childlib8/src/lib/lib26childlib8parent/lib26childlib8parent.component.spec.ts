import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26childlib8parentComponent } from './lib26childlib8parent.component';

describe('Lib26childlib8parentComponent', () => {
  let component: Lib26childlib8parentComponent;
  let fixture: ComponentFixture<Lib26childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib26childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
