import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib319parentComponent } from './lib319parent.component';

describe('Lib319parentComponent', () => {
  let component: Lib319parentComponent;
  let fixture: ComponentFixture<Lib319parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib319parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib319parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
