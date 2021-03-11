import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib266parentComponent } from './lib266parent.component';

describe('Lib266parentComponent', () => {
  let component: Lib266parentComponent;
  let fixture: ComponentFixture<Lib266parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib266parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib266parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
