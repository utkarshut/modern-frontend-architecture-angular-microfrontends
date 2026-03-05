import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteError } from './remote-error';

describe('RemoteError', () => {
  let component: RemoteError;
  let fixture: ComponentFixture<RemoteError>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoteError]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoteError);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
