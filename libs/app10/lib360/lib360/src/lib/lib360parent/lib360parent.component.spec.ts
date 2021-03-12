import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib360parentComponent } from './lib360parent.component';

describe('Lib360parentComponent', () => {
  let component: Lib360parentComponent;
  let fixture: ComponentFixture<Lib360parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib360parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib360parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
