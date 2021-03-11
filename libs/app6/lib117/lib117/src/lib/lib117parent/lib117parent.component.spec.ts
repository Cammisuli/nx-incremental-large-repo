import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib117parentComponent } from './lib117parent.component';

describe('Lib117parentComponent', () => {
  let component: Lib117parentComponent;
  let fixture: ComponentFixture<Lib117parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib117parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib117parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
