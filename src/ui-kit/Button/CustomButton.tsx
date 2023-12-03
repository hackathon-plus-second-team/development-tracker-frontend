import Button from '@mui/material/Button';
import { buttonStyle } from './CustomButtonStyle.ts';

interface ButtonProps {
    text: string;
    buttonVariant: string;
    disabled: boolean;
}

export default function CustomButton({ text, buttonVariant, disabled }: ButtonProps) {
    return (
        <Button type="button" disabled={disabled} variant={buttonVariant} sx={buttonStyle[buttonVariant]}>
            {text}
        </Button>
    );
}
