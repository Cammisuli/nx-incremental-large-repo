import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib38childlib6parentComponent } from './lib38childlib6parent.component';

describe('Lib38childlib6parentComponent', () => {
  let component: Lib38childlib6parentComponent;
  let fixture: ComponentFixture<Lib38childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib38childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib38childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
