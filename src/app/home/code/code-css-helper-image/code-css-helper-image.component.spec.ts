import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeCssHelperImageComponent } from './code-css-helper-image.component';

describe('CodeCssHelperImageComponent', () => {
  let component: CodeCssHelperImageComponent;
  let fixture: ComponentFixture<CodeCssHelperImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeCssHelperImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeCssHelperImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
