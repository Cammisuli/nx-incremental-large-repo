import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib232parentComponent } from './lib232parent.component';

describe('Lib232parentComponent', () => {
  let component: Lib232parentComponent;
  let fixture: ComponentFixture<Lib232parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib232parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib232parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
