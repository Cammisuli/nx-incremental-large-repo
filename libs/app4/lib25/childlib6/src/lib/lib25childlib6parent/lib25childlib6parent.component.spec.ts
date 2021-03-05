import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25childlib6parentComponent } from './lib25childlib6parent.component';

describe('Lib25childlib6parentComponent', () => {
  let component: Lib25childlib6parentComponent;
  let fixture: ComponentFixture<Lib25childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib25childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
