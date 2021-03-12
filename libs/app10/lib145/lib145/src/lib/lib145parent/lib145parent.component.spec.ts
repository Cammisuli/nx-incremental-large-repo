import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib145parentComponent } from './lib145parent.component';

describe('Lib145parentComponent', () => {
  let component: Lib145parentComponent;
  let fixture: ComponentFixture<Lib145parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib145parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib145parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
