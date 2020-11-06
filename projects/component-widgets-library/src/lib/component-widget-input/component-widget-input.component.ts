import { Component, Input, OnInit } from '@angular/core';
import { InputOptions } from './InputOptions';

@Component({
  selector: 'component-widget-input',
  templateUrl: './component-widget-input.component.html',
  styleUrls: ['./component-widget-input.component.scss']
})
export class ComponentWidgetInputComponent implements OnInit {

    @Input() options: InputOptions;

    constructor() { }

    ngOnInit() {
        if (this.options.disabled === true) {
            this.options.formControl.disable();
        }
    }

    onBlur() {
        if (this.options && this.options.onBlur) {
            this.options.onBlur();
        }
    }
}
