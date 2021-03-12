import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib200parentComponent } from './lib200parent.component';

describe('Lib200parentComponent', () => {
  let component: Lib200parentComponent;
  let fixture: ComponentFixture<Lib200parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib200parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib200parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
