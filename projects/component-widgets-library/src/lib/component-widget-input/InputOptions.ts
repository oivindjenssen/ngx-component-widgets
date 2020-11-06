import { FormControl } from '@angular/forms';

export interface InputOptions {
    id: string;
    label: string;
    type: string;
    formControl: FormControl;
    onBlur?: any;
    disabled?: boolean;
    placeholder?: string;
    validations?: {
        key: string;
        message: string
    }[];
}