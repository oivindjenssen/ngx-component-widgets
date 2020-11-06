import { FormControl } from '@angular/forms';

export interface SelectOptions {
    id: string;
    label: string;
    list: any;
    formControl: FormControl;
    valueProperty: string;
    displayProperty: string;
    disabled?: boolean;
    validations?: {
        key: string;
        message: string
    }[];
}