import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib155parentComponent } from './lib155parent.component';

describe('Lib155parentComponent', () => {
  let component: Lib155parentComponent;
  let fixture: ComponentFixture<Lib155parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib155parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib155parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
