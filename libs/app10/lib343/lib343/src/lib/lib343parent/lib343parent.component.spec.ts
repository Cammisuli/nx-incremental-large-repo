import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib343parentComponent } from './lib343parent.component';

describe('Lib343parentComponent', () => {
  let component: Lib343parentComponent;
  let fixture: ComponentFixture<Lib343parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib343parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib343parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
