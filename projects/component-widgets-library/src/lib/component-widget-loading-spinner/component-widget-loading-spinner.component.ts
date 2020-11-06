import { Component, Input, OnInit } from '@angular/core';
import { LoadingSpinnerOptions } from './LoadingSpinnerOptions';

@Component({
  selector: 'component-widget-loading-spinner',
  templateUrl: './component-widget-loading-spinner.component.html',
  styleUrls: ['./component-widget-loading-spinner.component.scss']
})
export class ComponentWidgetLoadingSpinnerComponent implements OnInit {

    @Input() options: LoadingSpinnerOptions;

    constructor() { }

    ngOnInit(): void {}

}
