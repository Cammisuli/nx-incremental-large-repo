import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25parentComponent } from './lib25parent.component';

describe('Lib25parentComponent', () => {
  let component: Lib25parentComponent;
  let fixture: ComponentFixture<Lib25parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib25parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
