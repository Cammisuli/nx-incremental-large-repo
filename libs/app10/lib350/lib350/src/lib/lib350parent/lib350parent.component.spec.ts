import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib350parentComponent } from './lib350parent.component';

describe('Lib350parentComponent', () => {
  let component: Lib350parentComponent;
  let fixture: ComponentFixture<Lib350parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib350parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib350parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
