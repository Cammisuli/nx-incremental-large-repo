import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib61parentComponent } from './lib61parent.component';

describe('Lib61parentComponent', () => {
  let component: Lib61parentComponent;
  let fixture: ComponentFixture<Lib61parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib61parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib61parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
