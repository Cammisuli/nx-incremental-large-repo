import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib247parentComponent } from './lib247parent.component';

describe('Lib247parentComponent', () => {
  let component: Lib247parentComponent;
  let fixture: ComponentFixture<Lib247parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib247parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib247parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
