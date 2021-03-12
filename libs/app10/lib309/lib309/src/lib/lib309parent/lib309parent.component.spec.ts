import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib309parentComponent } from './lib309parent.component';

describe('Lib309parentComponent', () => {
  let component: Lib309parentComponent;
  let fixture: ComponentFixture<Lib309parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib309parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib309parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
