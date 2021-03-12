import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib259parentComponent } from './lib259parent.component';

describe('Lib259parentComponent', () => {
  let component: Lib259parentComponent;
  let fixture: ComponentFixture<Lib259parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib259parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib259parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
