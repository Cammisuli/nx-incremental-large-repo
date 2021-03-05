import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib36childlib2parentComponent } from './lib36childlib2parent.component';

describe('Lib36childlib2parentComponent', () => {
  let component: Lib36childlib2parentComponent;
  let fixture: ComponentFixture<Lib36childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib36childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib36childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
