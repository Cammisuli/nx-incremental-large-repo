import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib35parentComponent } from './lib35parent.component';

describe('Lib35parentComponent', () => {
  let component: Lib35parentComponent;
  let fixture: ComponentFixture<Lib35parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib35parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib35parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
