import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib85parentComponent } from './lib85parent.component';

describe('Lib85parentComponent', () => {
  let component: Lib85parentComponent;
  let fixture: ComponentFixture<Lib85parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib85parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib85parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
