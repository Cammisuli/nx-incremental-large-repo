import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib98parentComponent } from './lib98parent.component';

describe('Lib98parentComponent', () => {
  let component: Lib98parentComponent;
  let fixture: ComponentFixture<Lib98parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib98parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib98parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
