import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompContacComponent } from './comp-contac.component';

describe('CompContacComponent', () => {
  let component: CompContacComponent;
  let fixture: ComponentFixture<CompContacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompContacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompContacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
