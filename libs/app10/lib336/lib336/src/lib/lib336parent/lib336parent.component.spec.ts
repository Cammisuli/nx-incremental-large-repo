import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib336parentComponent } from './lib336parent.component';

describe('Lib336parentComponent', () => {
  let component: Lib336parentComponent;
  let fixture: ComponentFixture<Lib336parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib336parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib336parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
