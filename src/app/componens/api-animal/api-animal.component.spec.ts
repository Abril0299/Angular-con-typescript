import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiAnimalComponent } from './api-animal.component';

describe('ApiAnimalComponent', () => {
  let component: ApiAnimalComponent;
  let fixture: ComponentFixture<ApiAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
