import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib187parentComponent } from './lib187parent.component';

describe('Lib187parentComponent', () => {
  let component: Lib187parentComponent;
  let fixture: ComponentFixture<Lib187parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib187parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib187parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
