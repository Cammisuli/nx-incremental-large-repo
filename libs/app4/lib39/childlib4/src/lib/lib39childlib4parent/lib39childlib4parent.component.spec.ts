import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib39childlib4parentComponent } from './lib39childlib4parent.component';

describe('Lib39childlib4parentComponent', () => {
  let component: Lib39childlib4parentComponent;
  let fixture: ComponentFixture<Lib39childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib39childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib39childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
