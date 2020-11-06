import { Component, Input, OnInit } from '@angular/core';
import { RadioOptions } from './RadioOptions';

@Component({
    selector: 'component-widget-radio',
    templateUrl: './component-widget-radio.component.html',
    styleUrls: ['./component-widget-radio.component.scss']
})
export class ComponentWidgetRadioComponent implements OnInit {

    @Input() options: RadioOptions;

    constructor() { }

    ngOnInit() {
        if (this.options.disabled === true) {
            this.options.formControl.disable();
        }
    }

}
