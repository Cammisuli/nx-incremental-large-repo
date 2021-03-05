import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19childlib5parentComponent } from './lib19childlib5parent.component';

describe('Lib19childlib5parentComponent', () => {
  let component: Lib19childlib5parentComponent;
  let fixture: ComponentFixture<Lib19childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib19childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
