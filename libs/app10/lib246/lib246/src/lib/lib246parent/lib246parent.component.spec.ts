import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib246parentComponent } from './lib246parent.component';

describe('Lib246parentComponent', () => {
  let component: Lib246parentComponent;
  let fixture: ComponentFixture<Lib246parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib246parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib246parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
