import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib110parentComponent } from './lib110parent.component';

describe('Lib110parentComponent', () => {
  let component: Lib110parentComponent;
  let fixture: ComponentFixture<Lib110parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib110parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib110parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
