import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityAreaComponent } from './utility-area.component';

describe('UtilityAreaComponent', () => {
  let component: UtilityAreaComponent;
  let fixture: ComponentFixture<UtilityAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilityAreaComponent]
    });
    fixture = TestBed.createComponent(UtilityAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
