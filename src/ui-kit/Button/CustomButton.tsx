import Button from '@mui/material/Button';
import { buttonStyle } from './CustomButtonStyle.ts';

interface ButtonProps {
    text: string;
    buttonVariant: string;
    disabled: boolean;
    onClick?:React.MouseEventHandler<HTMLAnchorElement>
}

export default function CustomButton({ text, buttonVariant, disabled, onClick }: ButtonProps) {
    return (
        // @ts-expect-error исправить
        <Button type="button" disabled={disabled} variant={buttonVariant} sx={buttonStyle[buttonVariant]} onClick={onClick}>
            {text}
        </Button>
    );
}
