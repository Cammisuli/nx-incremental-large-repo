import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11childlib6parentComponent } from './lib11childlib6parent.component';

describe('Lib11childlib6parentComponent', () => {
  let component: Lib11childlib6parentComponent;
  let fixture: ComponentFixture<Lib11childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib11childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
