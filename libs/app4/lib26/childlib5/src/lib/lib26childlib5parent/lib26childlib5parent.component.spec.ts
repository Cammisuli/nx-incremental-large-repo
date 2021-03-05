import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26childlib5parentComponent } from './lib26childlib5parent.component';

describe('Lib26childlib5parentComponent', () => {
  let component: Lib26childlib5parentComponent;
  let fixture: ComponentFixture<Lib26childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib26childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
