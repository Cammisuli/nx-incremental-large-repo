import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib205parentComponent } from './lib205parent.component';

describe('Lib205parentComponent', () => {
  let component: Lib205parentComponent;
  let fixture: ComponentFixture<Lib205parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib205parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib205parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
