import { FormControl } from '@angular/forms';

export interface TextareaOptions {
    id: string;
    label: string;
    formControl: FormControl;
    onBlur?: any;
    disabled?: boolean;
    placeholder?: string;
    validations?: {
        key: string;
        message: string
    }[];
}