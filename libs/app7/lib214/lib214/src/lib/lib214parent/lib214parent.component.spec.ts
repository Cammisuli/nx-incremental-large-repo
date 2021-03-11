import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib214parentComponent } from './lib214parent.component';

describe('Lib214parentComponent', () => {
  let component: Lib214parentComponent;
  let fixture: ComponentFixture<Lib214parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib214parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib214parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
