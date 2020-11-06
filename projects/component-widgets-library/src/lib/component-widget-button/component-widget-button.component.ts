import { Component, Input, OnInit } from '@angular/core';
import { LoadingSpinnerOptions } from '../component-widget-loading-spinner/LoadingSpinnerOptions';
import { ButtonOptions } from './ButtonOptions';

@Component({
    selector: 'component-widget-button',
    templateUrl: './component-widget-button.component.html',
    styleUrls: ['./component-widget-button.component.scss']
})
export class ComponentWidgetButtonComponent implements OnInit {

    @Input() options: ButtonOptions;
    loadingSpinnerOptions: LoadingSpinnerOptions;

    constructor() {
        this.loadingSpinnerOptions = {
            loading: this.options.loading,
            size: 'medium'
        };
    }

    ngOnInit(): void {}

}
