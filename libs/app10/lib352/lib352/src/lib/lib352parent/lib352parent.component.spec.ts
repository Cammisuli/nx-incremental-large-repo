import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib352parentComponent } from './lib352parent.component';

describe('Lib352parentComponent', () => {
  let component: Lib352parentComponent;
  let fixture: ComponentFixture<Lib352parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib352parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib352parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
