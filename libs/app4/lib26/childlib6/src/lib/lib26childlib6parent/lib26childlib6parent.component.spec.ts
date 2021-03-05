import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26childlib6parentComponent } from './lib26childlib6parent.component';

describe('Lib26childlib6parentComponent', () => {
  let component: Lib26childlib6parentComponent;
  let fixture: ComponentFixture<Lib26childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib26childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
