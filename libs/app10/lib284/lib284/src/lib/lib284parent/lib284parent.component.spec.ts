import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib284parentComponent } from './lib284parent.component';

describe('Lib284parentComponent', () => {
  let component: Lib284parentComponent;
  let fixture: ComponentFixture<Lib284parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib284parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib284parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
