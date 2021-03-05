import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib12parentComponent } from './lib12parent.component';

describe('Lib12parentComponent', () => {
  let component: Lib12parentComponent;
  let fixture: ComponentFixture<Lib12parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib12parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib12parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
