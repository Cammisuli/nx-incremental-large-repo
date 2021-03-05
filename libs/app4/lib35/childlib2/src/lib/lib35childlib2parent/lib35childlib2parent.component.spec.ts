import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib35childlib2parentComponent } from './lib35childlib2parent.component';

describe('Lib35childlib2parentComponent', () => {
  let component: Lib35childlib2parentComponent;
  let fixture: ComponentFixture<Lib35childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib35childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib35childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
