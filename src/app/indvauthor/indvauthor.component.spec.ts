import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndvauthorComponent } from './indvauthor.component';

describe('IndvauthorComponent', () => {
  let component: IndvauthorComponent;
  let fixture: ComponentFixture<IndvauthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndvauthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndvauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
