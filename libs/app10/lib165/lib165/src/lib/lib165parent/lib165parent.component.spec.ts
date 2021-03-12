import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib165parentComponent } from './lib165parent.component';

describe('Lib165parentComponent', () => {
  let component: Lib165parentComponent;
  let fixture: ComponentFixture<Lib165parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib165parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib165parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
