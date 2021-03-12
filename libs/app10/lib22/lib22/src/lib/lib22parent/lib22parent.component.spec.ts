import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22parentComponent } from './lib22parent.component';

describe('Lib22parentComponent', () => {
  let component: Lib22parentComponent;
  let fixture: ComponentFixture<Lib22parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib22parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
