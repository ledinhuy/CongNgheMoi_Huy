import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCraeteGroupChatComponent } from './dialog-craete-group-chat.component';

describe('DialogCraeteGroupChatComponent', () => {
  let component: DialogCraeteGroupChatComponent;
  let fixture: ComponentFixture<DialogCraeteGroupChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCraeteGroupChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCraeteGroupChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
