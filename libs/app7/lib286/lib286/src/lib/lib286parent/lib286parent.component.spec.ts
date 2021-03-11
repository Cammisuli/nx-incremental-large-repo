import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib286parentComponent } from './lib286parent.component';

describe('Lib286parentComponent', () => {
  let component: Lib286parentComponent;
  let fixture: ComponentFixture<Lib286parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib286parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib286parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
