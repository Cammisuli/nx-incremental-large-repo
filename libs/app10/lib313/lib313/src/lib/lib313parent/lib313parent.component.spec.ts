import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib313parentComponent } from './lib313parent.component';

describe('Lib313parentComponent', () => {
  let component: Lib313parentComponent;
  let fixture: ComponentFixture<Lib313parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib313parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib313parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
