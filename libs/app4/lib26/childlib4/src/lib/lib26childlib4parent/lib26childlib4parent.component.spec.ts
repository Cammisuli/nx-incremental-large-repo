import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26childlib4parentComponent } from './lib26childlib4parent.component';

describe('Lib26childlib4parentComponent', () => {
  let component: Lib26childlib4parentComponent;
  let fixture: ComponentFixture<Lib26childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib26childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
