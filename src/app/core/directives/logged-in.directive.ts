import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { LoginStatusService } from '../services';

@Directive({
  selector: '[loggedIn]'
})
export class LoggedInDirective implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly loginStatusService: LoginStatusService
  ) { }

  ngOnInit(): void {
    this.subscription = this.loginStatusService.getIsUserLoggedIn().pipe(
      tap(isUserLoggedIn => {
        if (isUserLoggedIn) {
          this.elementRef.nativeElement.style.display = 'inline';

          return;
        }

        this.elementRef.nativeElement.style.display = 'none';
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
