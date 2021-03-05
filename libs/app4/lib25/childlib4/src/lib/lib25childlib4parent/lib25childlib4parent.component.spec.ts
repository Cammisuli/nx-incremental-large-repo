import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25childlib4parentComponent } from './lib25childlib4parent.component';

describe('Lib25childlib4parentComponent', () => {
  let component: Lib25childlib4parentComponent;
  let fixture: ComponentFixture<Lib25childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib25childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
