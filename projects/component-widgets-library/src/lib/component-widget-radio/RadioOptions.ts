import { FormControl } from '@angular/forms';

export interface RadioOptions {
    label: string;
    buttons: {
        value: string,
        label: string
    }[],
    name: string;
    disabled?: boolean;
    formControl: FormControl;
    validations?: {
        key: string;
        message: string
    }[];
}