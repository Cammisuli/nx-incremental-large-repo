import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib228parentComponent } from './lib228parent.component';

describe('Lib228parentComponent', () => {
  let component: Lib228parentComponent;
  let fixture: ComponentFixture<Lib228parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib228parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib228parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
