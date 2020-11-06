import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentWidgetButtonComponent } from './component-widget-button/component-widget-button.component';
import { ComponentWidgetCheckboxComponent } from './component-widget-checkbox/component-widget-checkbox.component';
import { ComponentWidgetInputComponent } from './component-widget-input/component-widget-input.component';
import { ComponentWidgetLoadingSpinnerComponent } from './component-widget-loading-spinner/component-widget-loading-spinner.component';
import { ComponentWidgetRadioComponent } from './component-widget-radio/component-widget-radio.component';
import { ComponentWidgetSelectComponent } from './component-widget-select/component-widget-select.component';
import { ComponentWidgetTextareaComponent } from './component-widget-textarea/component-widget-textarea.component';

@NgModule({
    declarations: [
        ComponentWidgetButtonComponent,
        ComponentWidgetCheckboxComponent,
        ComponentWidgetInputComponent,
        ComponentWidgetLoadingSpinnerComponent, 
        ComponentWidgetRadioComponent,
        ComponentWidgetSelectComponent,
        ComponentWidgetTextareaComponent,
    ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [
        ComponentWidgetButtonComponent,
        ComponentWidgetCheckboxComponent,
        ComponentWidgetInputComponent,
        ComponentWidgetLoadingSpinnerComponent, 
        ComponentWidgetRadioComponent,
        ComponentWidgetSelectComponent,
        ComponentWidgetTextareaComponent,
    ]
})
export class ComponentWidgetsLibraryModule { }
