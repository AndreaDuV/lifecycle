import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price: number = 0;

  public interval$?: Subscription;


  ngOnInit(): void {
    console.log('Price-ngOnInit');

    this.interval$ = interval(1000).subscribe(value => {
      console.log('Tick: ', value);
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Price-ngOnChanges');
    console.log({ changes });
  }
  ngOnDestroy(): void {
    console.log('Price-ngOnDestroy');
    this.interval$?.unsubscribe();
  }



}
