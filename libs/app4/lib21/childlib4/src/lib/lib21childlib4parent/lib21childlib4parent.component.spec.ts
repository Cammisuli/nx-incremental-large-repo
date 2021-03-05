import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21childlib4parentComponent } from './lib21childlib4parent.component';

describe('Lib21childlib4parentComponent', () => {
  let component: Lib21childlib4parentComponent;
  let fixture: ComponentFixture<Lib21childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib21childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
