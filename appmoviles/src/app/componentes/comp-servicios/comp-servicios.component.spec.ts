import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompServiciosComponent } from './comp-servicios.component';

describe('CompServiciosComponent', () => {
  let component: CompServiciosComponent;
  let fixture: ComponentFixture<CompServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompServiciosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
