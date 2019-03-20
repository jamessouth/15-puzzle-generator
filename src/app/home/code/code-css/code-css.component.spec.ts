import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeCssComponent } from './code-css.component';

describe('CodeCssComponent', () => {
  let component: CodeCssComponent;
  let fixture: ComponentFixture<CodeCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
