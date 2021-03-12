import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib217parentComponent } from './lib217parent.component';

describe('Lib217parentComponent', () => {
  let component: Lib217parentComponent;
  let fixture: ComponentFixture<Lib217parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib217parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib217parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
