import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19childlib2parentComponent } from './lib19childlib2parent.component';

describe('Lib19childlib2parentComponent', () => {
  let component: Lib19childlib2parentComponent;
  let fixture: ComponentFixture<Lib19childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib19childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
