import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib212parentComponent } from './lib212parent.component';

describe('Lib212parentComponent', () => {
  let component: Lib212parentComponent;
  let fixture: ComponentFixture<Lib212parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib212parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib212parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
