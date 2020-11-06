export interface ButtonOptions {
    id: string;
    type: string;
    label: string;
    disabled?: boolean;
    onClick?: any;
    onClickParams?: any;
    iconOnly?: boolean;
    icon?: string;
    loading?: boolean;
}