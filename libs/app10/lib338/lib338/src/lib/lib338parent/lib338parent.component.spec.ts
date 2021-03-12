import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib338parentComponent } from './lib338parent.component';

describe('Lib338parentComponent', () => {
  let component: Lib338parentComponent;
  let fixture: ComponentFixture<Lib338parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib338parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib338parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
