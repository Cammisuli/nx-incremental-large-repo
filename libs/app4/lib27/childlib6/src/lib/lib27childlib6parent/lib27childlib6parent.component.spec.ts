import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27childlib6parentComponent } from './lib27childlib6parent.component';

describe('Lib27childlib6parentComponent', () => {
  let component: Lib27childlib6parentComponent;
  let fixture: ComponentFixture<Lib27childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib27childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
