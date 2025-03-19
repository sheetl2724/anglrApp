import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdNavListComponent } from './prod-nav-list.component';

describe('ProdNavListComponent', () => {
  let component: ProdNavListComponent;
  let fixture: ComponentFixture<ProdNavListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdNavListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
