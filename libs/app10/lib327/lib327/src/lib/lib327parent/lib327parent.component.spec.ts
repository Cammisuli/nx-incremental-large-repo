import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib327parentComponent } from './lib327parent.component';

describe('Lib327parentComponent', () => {
  let component: Lib327parentComponent;
  let fixture: ComponentFixture<Lib327parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib327parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib327parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
