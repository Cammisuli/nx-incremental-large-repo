import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19childlib4parentComponent } from './lib19childlib4parent.component';

describe('Lib19childlib4parentComponent', () => {
  let component: Lib19childlib4parentComponent;
  let fixture: ComponentFixture<Lib19childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib19childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
