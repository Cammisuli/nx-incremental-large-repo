import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib312parentComponent } from './lib312parent.component';

describe('Lib312parentComponent', () => {
  let component: Lib312parentComponent;
  let fixture: ComponentFixture<Lib312parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib312parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib312parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
