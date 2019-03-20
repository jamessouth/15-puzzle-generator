import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeHtmlComponent } from './code-html.component';

describe('CodeHtmlComponent', () => {
  let component: CodeHtmlComponent;
  let fixture: ComponentFixture<CodeHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
