import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib130parentComponent } from './lib130parent.component';

describe('Lib130parentComponent', () => {
  let component: Lib130parentComponent;
  let fixture: ComponentFixture<Lib130parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib130parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib130parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
