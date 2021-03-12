import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib364parentComponent } from './lib364parent.component';

describe('Lib364parentComponent', () => {
  let component: Lib364parentComponent;
  let fixture: ComponentFixture<Lib364parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib364parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib364parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
