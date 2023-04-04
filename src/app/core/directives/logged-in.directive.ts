import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { LoginStatusService } from '../services';

@Directive({
  selector: '[loggedIn]'
})
export class LoggedInDirective implements OnInit, OnDestroy {

  @Input('loggedIn') screenBreakpoint?: string;

  private subscription: Subscription;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly loginStatusService: LoginStatusService
  ) { }

  ngOnInit(): void {
    this.subscription = this.loginStatusService.getIsUserLoggedIn().pipe(
      tap(isUserLoggedIn => {
        if (isUserLoggedIn) {
          if (Number(this.screenBreakpoint) && window.innerWidth < Number(this.screenBreakpoint)) {
            this.elementRef.nativeElement.style.visibility = 'hidden';

            return;
          }

          this.elementRef.nativeElement.style.visibility = 'visible';

          return;
        }

        this.elementRef.nativeElement.style.visibility = 'hidden';
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
