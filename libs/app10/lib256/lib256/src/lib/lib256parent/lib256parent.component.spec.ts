import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib256parentComponent } from './lib256parent.component';

describe('Lib256parentComponent', () => {
  let component: Lib256parentComponent;
  let fixture: ComponentFixture<Lib256parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib256parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib256parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
