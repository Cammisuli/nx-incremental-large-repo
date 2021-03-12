import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib199parentComponent } from './lib199parent.component';

describe('Lib199parentComponent', () => {
  let component: Lib199parentComponent;
  let fixture: ComponentFixture<Lib199parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib199parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib199parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
