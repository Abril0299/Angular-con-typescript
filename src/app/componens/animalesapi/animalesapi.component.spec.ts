import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalesapiComponent } from './animalesapi.component';

describe('AnimalesapiComponent', () => {
  let component: AnimalesapiComponent;
  let fixture: ComponentFixture<AnimalesapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalesapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalesapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
