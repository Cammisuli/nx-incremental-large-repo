import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib105parentComponent } from './lib105parent.component';

describe('Lib105parentComponent', () => {
  let component: Lib105parentComponent;
  let fixture: ComponentFixture<Lib105parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib105parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib105parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
