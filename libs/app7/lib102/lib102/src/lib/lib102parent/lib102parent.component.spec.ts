import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib102parentComponent } from './lib102parent.component';

describe('Lib102parentComponent', () => {
  let component: Lib102parentComponent;
  let fixture: ComponentFixture<Lib102parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib102parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib102parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
