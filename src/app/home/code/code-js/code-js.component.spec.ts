import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeJsComponent } from './code-js.component';

describe('CodeJsComponent', () => {
  let component: CodeJsComponent;
  let fixture: ComponentFixture<CodeJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
