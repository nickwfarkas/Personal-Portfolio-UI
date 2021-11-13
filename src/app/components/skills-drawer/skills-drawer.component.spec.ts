import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsDrawerComponent } from './skills-drawer.component';

describe('SkillsDrawerComponent', () => {
  let component: SkillsDrawerComponent;
  let fixture: ComponentFixture<SkillsDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
