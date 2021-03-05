import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib34childlib4parentComponent } from './lib34childlib4parent.component';

describe('Lib34childlib4parentComponent', () => {
  let component: Lib34childlib4parentComponent;
  let fixture: ComponentFixture<Lib34childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib34childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib34childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
