import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib142parentComponent } from './lib142parent.component';

describe('Lib142parentComponent', () => {
  let component: Lib142parentComponent;
  let fixture: ComponentFixture<Lib142parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib142parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib142parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
