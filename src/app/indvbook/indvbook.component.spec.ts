import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndvbookComponent } from './indvbook.component';

describe('IndvbookComponent', () => {
  let component: IndvbookComponent;
  let fixture: ComponentFixture<IndvbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndvbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndvbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
