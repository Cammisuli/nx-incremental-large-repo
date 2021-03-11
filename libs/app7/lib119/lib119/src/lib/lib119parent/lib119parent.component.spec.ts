import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib119parentComponent } from './lib119parent.component';

describe('Lib119parentComponent', () => {
  let component: Lib119parentComponent;
  let fixture: ComponentFixture<Lib119parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib119parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib119parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
