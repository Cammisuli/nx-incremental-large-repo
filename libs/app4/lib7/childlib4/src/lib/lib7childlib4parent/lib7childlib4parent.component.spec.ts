import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib4parentComponent } from './lib7childlib4parent.component';

describe('Lib7childlib4parentComponent', () => {
  let component: Lib7childlib4parentComponent;
  let fixture: ComponentFixture<Lib7childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib7childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
