import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib274parentComponent } from './lib274parent.component';

describe('Lib274parentComponent', () => {
  let component: Lib274parentComponent;
  let fixture: ComponentFixture<Lib274parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib274parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib274parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
