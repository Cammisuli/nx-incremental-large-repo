import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib38childlib4parentComponent } from './lib38childlib4parent.component';

describe('Lib38childlib4parentComponent', () => {
  let component: Lib38childlib4parentComponent;
  let fixture: ComponentFixture<Lib38childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib38childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib38childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
