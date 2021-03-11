import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6parentComponent } from './lib6parent.component';

describe('Lib6parentComponent', () => {
  let component: Lib6parentComponent;
  let fixture: ComponentFixture<Lib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
