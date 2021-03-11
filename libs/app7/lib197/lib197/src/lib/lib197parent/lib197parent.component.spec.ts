import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib197parentComponent } from './lib197parent.component';

describe('Lib197parentComponent', () => {
  let component: Lib197parentComponent;
  let fixture: ComponentFixture<Lib197parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib197parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib197parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
