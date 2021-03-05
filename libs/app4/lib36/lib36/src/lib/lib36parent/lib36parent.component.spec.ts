import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib36parentComponent } from './lib36parent.component';

describe('Lib36parentComponent', () => {
  let component: Lib36parentComponent;
  let fixture: ComponentFixture<Lib36parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib36parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib36parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
