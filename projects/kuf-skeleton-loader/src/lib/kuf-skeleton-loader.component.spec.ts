import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KufSkeletonLoaderComponent } from './kuf-skeleton-loader.component';

describe('KufSkeletonLoaderComponent', () => {
  let component: KufSkeletonLoaderComponent;
  let fixture: ComponentFixture<KufSkeletonLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KufSkeletonLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KufSkeletonLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
