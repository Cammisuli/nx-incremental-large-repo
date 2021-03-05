import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23childlib4parentComponent } from './lib23childlib4parent.component';

describe('Lib23childlib4parentComponent', () => {
  let component: Lib23childlib4parentComponent;
  let fixture: ComponentFixture<Lib23childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib23childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
