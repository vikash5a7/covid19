import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelfullinkComponent } from './helfullink.component';

describe('HelfullinkComponent', () => {
  let component: HelfullinkComponent;
  let fixture: ComponentFixture<HelfullinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelfullinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelfullinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
