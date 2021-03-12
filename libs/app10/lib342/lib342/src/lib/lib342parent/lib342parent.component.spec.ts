import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib342parentComponent } from './lib342parent.component';

describe('Lib342parentComponent', () => {
  let component: Lib342parentComponent;
  let fixture: ComponentFixture<Lib342parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib342parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib342parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
