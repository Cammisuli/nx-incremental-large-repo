import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib31childlib6parentComponent } from './lib31childlib6parent.component';

describe('Lib31childlib6parentComponent', () => {
  let component: Lib31childlib6parentComponent;
  let fixture: ComponentFixture<Lib31childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib31childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib31childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
