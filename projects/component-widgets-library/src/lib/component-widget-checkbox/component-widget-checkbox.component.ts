import { Component, Input, OnInit } from '@angular/core';
import { CheckboxOptions } from './CheckboxOptions';

@Component({
    selector: 'component-widget-checkbox',
    templateUrl: './component-widget-checkbox.component.html',
    styleUrls: ['./component-widget-checkbox.component.scss']
})
export class ComponentWidgetCheckboxComponent implements OnInit {

    @Input() options: CheckboxOptions;

    constructor() { }

    ngOnInit(): void {
        if (this.options.disabled === true) {
            this.options.formControl.disable();
        }
    }
}
