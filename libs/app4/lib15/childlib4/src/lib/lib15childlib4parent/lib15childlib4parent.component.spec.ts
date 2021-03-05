import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15childlib4parentComponent } from './lib15childlib4parent.component';

describe('Lib15childlib4parentComponent', () => {
  let component: Lib15childlib4parentComponent;
  let fixture: ComponentFixture<Lib15childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib15childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
