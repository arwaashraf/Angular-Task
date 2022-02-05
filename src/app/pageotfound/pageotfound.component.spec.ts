import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageotfoundComponent } from './pageotfound.component';

describe('PageotfoundComponent', () => {
  let component: PageotfoundComponent;
  let fixture: ComponentFixture<PageotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
