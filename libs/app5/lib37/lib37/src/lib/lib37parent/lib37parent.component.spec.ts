import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib37parentComponent } from './lib37parent.component';

describe('Lib37parentComponent', () => {
  let component: Lib37parentComponent;
  let fixture: ComponentFixture<Lib37parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib37parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib37parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
