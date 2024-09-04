import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologieComponent } from './tecnologie.component';

describe('TecnologieComponent', () => {
  let component: TecnologieComponent;
  let fixture: ComponentFixture<TecnologieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecnologieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TecnologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
