import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib39parentComponent } from './lib39parent.component';

describe('Lib39parentComponent', () => {
  let component: Lib39parentComponent;
  let fixture: ComponentFixture<Lib39parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib39parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib39parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
