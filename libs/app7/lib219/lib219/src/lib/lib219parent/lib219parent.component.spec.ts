import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib219parentComponent } from './lib219parent.component';

describe('Lib219parentComponent', () => {
  let component: Lib219parentComponent;
  let fixture: ComponentFixture<Lib219parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib219parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib219parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
