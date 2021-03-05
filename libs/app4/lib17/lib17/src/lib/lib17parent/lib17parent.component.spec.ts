import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17parentComponent } from './lib17parent.component';

describe('Lib17parentComponent', () => {
  let component: Lib17parentComponent;
  let fixture: ComponentFixture<Lib17parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib17parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
