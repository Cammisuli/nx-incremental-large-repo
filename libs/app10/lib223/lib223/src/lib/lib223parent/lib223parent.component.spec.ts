import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib223parentComponent } from './lib223parent.component';

describe('Lib223parentComponent', () => {
  let component: Lib223parentComponent;
  let fixture: ComponentFixture<Lib223parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib223parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib223parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
