import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPreciosComponent } from './comp-precios.component';

describe('CompPreciosComponent', () => {
  let component: CompPreciosComponent;
  let fixture: ComponentFixture<CompPreciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompPreciosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompPreciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
