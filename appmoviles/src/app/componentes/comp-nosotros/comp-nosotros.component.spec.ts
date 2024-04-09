import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompNosotrosComponent } from './comp-nosotros.component';

describe('CompNosotrosComponent', () => {
  let component: CompNosotrosComponent;
  let fixture: ComponentFixture<CompNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompNosotrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
