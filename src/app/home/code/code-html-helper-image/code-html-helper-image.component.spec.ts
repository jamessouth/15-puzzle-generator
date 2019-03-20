import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeHtmlHelperImageComponent } from './code-html-helper-image.component';

describe('CodeHtmlHelperImageComponent', () => {
  let component: CodeHtmlHelperImageComponent;
  let fixture: ComponentFixture<CodeHtmlHelperImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeHtmlHelperImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeHtmlHelperImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
