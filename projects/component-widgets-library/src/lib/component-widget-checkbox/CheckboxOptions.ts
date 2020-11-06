import { FormControl } from '@angular/forms';

export interface CheckboxOptions {
    id: string;
    label: string;
    disabled?: boolean;
    formControl: FormControl;
    validations?: {
        key: string;
        message: string
    }[];
}