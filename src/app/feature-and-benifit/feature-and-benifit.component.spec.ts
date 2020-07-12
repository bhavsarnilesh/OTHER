import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAndBenifitComponent } from './feature-and-benifit.component';

describe('FeatureAndBenifitComponent', () => {
  let component: FeatureAndBenifitComponent;
  let fixture: ComponentFixture<FeatureAndBenifitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureAndBenifitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureAndBenifitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
