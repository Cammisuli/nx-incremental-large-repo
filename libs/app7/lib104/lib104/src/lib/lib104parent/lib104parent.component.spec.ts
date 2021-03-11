import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib104parentComponent } from './lib104parent.component';

describe('Lib104parentComponent', () => {
  let component: Lib104parentComponent;
  let fixture: ComponentFixture<Lib104parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib104parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib104parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
