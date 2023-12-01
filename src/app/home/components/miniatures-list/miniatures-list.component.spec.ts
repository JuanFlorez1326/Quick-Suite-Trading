import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniaturesListComponent } from './miniatures-list.component';

describe('MiniaturesListComponent', () => {
  let component: MiniaturesListComponent;
  let fixture: ComponentFixture<MiniaturesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniaturesListComponent]
    });
    fixture = TestBed.createComponent(MiniaturesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
