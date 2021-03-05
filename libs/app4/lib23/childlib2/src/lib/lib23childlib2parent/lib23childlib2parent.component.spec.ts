import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23childlib2parentComponent } from './lib23childlib2parent.component';

describe('Lib23childlib2parentComponent', () => {
  let component: Lib23childlib2parentComponent;
  let fixture: ComponentFixture<Lib23childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib23childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
