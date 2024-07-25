import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingPotusComponent } from './king-potus.component';

describe('KingPotusComponent', () => {
  let component: KingPotusComponent;
  let fixture: ComponentFixture<KingPotusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KingPotusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KingPotusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
