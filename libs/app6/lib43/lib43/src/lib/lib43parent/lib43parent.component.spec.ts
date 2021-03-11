import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib43parentComponent } from './lib43parent.component';

describe('Lib43parentComponent', () => {
  let component: Lib43parentComponent;
  let fixture: ComponentFixture<Lib43parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib43parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib43parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
