import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28childlib6parentComponent } from './lib28childlib6parent.component';

describe('Lib28childlib6parentComponent', () => {
  let component: Lib28childlib6parentComponent;
  let fixture: ComponentFixture<Lib28childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib28childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
