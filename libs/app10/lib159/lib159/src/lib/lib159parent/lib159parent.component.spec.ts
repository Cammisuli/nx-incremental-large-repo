import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib159parentComponent } from './lib159parent.component';

describe('Lib159parentComponent', () => {
  let component: Lib159parentComponent;
  let fixture: ComponentFixture<Lib159parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib159parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib159parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
