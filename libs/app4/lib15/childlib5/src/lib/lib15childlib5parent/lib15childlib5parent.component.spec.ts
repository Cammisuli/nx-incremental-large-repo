import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15childlib5parentComponent } from './lib15childlib5parent.component';

describe('Lib15childlib5parentComponent', () => {
  let component: Lib15childlib5parentComponent;
  let fixture: ComponentFixture<Lib15childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib15childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
