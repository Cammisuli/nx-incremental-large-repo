import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib40parentComponent } from './lib40parent.component';

describe('Lib40parentComponent', () => {
  let component: Lib40parentComponent;
  let fixture: ComponentFixture<Lib40parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib40parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib40parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
