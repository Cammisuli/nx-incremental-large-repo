import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib4parentComponent } from './lib5childlib4parent.component';

describe('Lib5childlib4parentComponent', () => {
  let component: Lib5childlib4parentComponent;
  let fixture: ComponentFixture<Lib5childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib5childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
