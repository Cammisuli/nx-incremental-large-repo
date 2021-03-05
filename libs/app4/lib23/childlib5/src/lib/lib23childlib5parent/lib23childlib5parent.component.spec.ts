import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23childlib5parentComponent } from './lib23childlib5parent.component';

describe('Lib23childlib5parentComponent', () => {
  let component: Lib23childlib5parentComponent;
  let fixture: ComponentFixture<Lib23childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib23childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
