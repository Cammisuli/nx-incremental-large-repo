import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib35childlib4parentComponent } from './lib35childlib4parent.component';

describe('Lib35childlib4parentComponent', () => {
  let component: Lib35childlib4parentComponent;
  let fixture: ComponentFixture<Lib35childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib35childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib35childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
