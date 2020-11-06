import { Component, Input, OnInit } from '@angular/core';
import { TextareaOptions } from './TextareaOptions';

@Component({
  selector: 'component-widget-textarea',
  templateUrl: './component-widget-textarea.component.html',
  styleUrls: ['./component-widget-textarea.component.scss']
})
export class ComponentWidgetTextareaComponent implements OnInit {

    @Input() options: TextareaOptions;

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
