import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib118parentComponent } from './lib118parent.component';

describe('Lib118parentComponent', () => {
  let component: Lib118parentComponent;
  let fixture: ComponentFixture<Lib118parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib118parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib118parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
