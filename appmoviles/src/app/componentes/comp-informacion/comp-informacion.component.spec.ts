import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompInformacionComponent } from './comp-informacion.component';

describe('CompInformacionComponent', () => {
  let component: CompInformacionComponent;
  let fixture: ComponentFixture<CompInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompInformacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
