import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib4parentComponent } from './lib9childlib4parent.component';

describe('Lib9childlib4parentComponent', () => {
  let component: Lib9childlib4parentComponent;
  let fixture: ComponentFixture<Lib9childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib9childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
