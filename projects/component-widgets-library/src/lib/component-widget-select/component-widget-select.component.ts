import { Component, Input, OnInit } from '@angular/core';
import { SelectOptions } from './SelectOptions';

@Component({
    selector: 'component-widget-select',
    templateUrl: './component-widget-select.component.html',
    styleUrls: ['./component-widget-select.component.scss']
})
export class ComponentWidgetSelectComponent implements OnInit {

    @Input() options: SelectOptions;

    constructor() { }

    ngOnInit() {
        if (this.options.disabled === true) {
            this.options.formControl.disable();
        }
    }
}
