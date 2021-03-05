import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib35childlib8parentComponent } from './lib35childlib8parent.component';

describe('Lib35childlib8parentComponent', () => {
  let component: Lib35childlib8parentComponent;
  let fixture: ComponentFixture<Lib35childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib35childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib35childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
