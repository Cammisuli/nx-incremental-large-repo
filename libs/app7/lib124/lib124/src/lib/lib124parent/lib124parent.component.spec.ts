import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib124parentComponent } from './lib124parent.component';

describe('Lib124parentComponent', () => {
  let component: Lib124parentComponent;
  let fixture: ComponentFixture<Lib124parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib124parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib124parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
