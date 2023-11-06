import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import { DataGrid as DataGridComponent } from '@mui/x-data-grid';

export const DataGrid = styled(DataGridComponent)(
    ({
        theme: {
            custom: { colors },
        },
    }) => ({
        '& .MuiDataGrid-columnHeaders': {
            backgroundColor: 'transparent',
        },
        '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.white,
        },
        '& .MuiDataGrid-footerContainer': {
            backgroundColor: colors.white,
            borderColor: 'transparent',
        },
    })
);

export const HeightSetterWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'fixedHeight',
})<{ fixedHeight?: number | `${number}rem` }>(({ fixedHeight }) => ({
    height: fixedHeight || 'unset',
}));
