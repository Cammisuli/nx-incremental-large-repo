import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib171parentComponent } from './lib171parent.component';

describe('Lib171parentComponent', () => {
  let component: Lib171parentComponent;
  let fixture: ComponentFixture<Lib171parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib171parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib171parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
