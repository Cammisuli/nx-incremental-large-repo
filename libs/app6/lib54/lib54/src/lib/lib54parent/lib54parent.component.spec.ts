import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib54parentComponent } from './lib54parent.component';

describe('Lib54parentComponent', () => {
  let component: Lib54parentComponent;
  let fixture: ComponentFixture<Lib54parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib54parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib54parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
