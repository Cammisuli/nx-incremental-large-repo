import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib339parentComponent } from './lib339parent.component';

describe('Lib339parentComponent', () => {
  let component: Lib339parentComponent;
  let fixture: ComponentFixture<Lib339parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib339parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib339parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
