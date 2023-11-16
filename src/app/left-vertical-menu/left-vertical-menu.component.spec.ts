import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftVerticalMenuComponent } from './left-vertical-menu.component';

describe('LeftVerticalMenuComponent', () => {
  let component: LeftVerticalMenuComponent;
  let fixture: ComponentFixture<LeftVerticalMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftVerticalMenuComponent]
    });
    fixture = TestBed.createComponent(LeftVerticalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
