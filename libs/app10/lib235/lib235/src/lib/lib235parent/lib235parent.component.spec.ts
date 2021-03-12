import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib235parentComponent } from './lib235parent.component';

describe('Lib235parentComponent', () => {
  let component: Lib235parentComponent;
  let fixture: ComponentFixture<Lib235parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib235parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib235parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
