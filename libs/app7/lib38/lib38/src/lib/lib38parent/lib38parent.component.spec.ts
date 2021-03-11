import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib38parentComponent } from './lib38parent.component';

describe('Lib38parentComponent', () => {
  let component: Lib38parentComponent;
  let fixture: ComponentFixture<Lib38parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib38parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib38parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
