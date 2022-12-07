import { styled } from '@mui/material/styles';
import ButtonComponent from '@mui/material/Button';

export const Button = styled(ButtonComponent)(({ theme }) => ({
    borderRadius: theme.custom.params.borderRadius,
    backgroundColor: 'pink',
}));
