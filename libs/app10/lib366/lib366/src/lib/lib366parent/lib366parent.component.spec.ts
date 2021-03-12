import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib366parentComponent } from './lib366parent.component';

describe('Lib366parentComponent', () => {
  let component: Lib366parentComponent;
  let fixture: ComponentFixture<Lib366parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib366parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib366parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
