import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib35childlib5parentComponent } from './lib35childlib5parent.component';

describe('Lib35childlib5parentComponent', () => {
  let component: Lib35childlib5parentComponent;
  let fixture: ComponentFixture<Lib35childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib35childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib35childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
