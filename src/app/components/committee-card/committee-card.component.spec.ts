import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteeCardComponent } from './committee-card.component';

describe('CommitteeCardComponent', () => {
  let component: CommitteeCardComponent;
  let fixture: ComponentFixture<CommitteeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommitteeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitteeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
