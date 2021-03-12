import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib302parentComponent } from './lib302parent.component';

describe('Lib302parentComponent', () => {
  let component: Lib302parentComponent;
  let fixture: ComponentFixture<Lib302parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib302parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib302parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
