import * as React from 'react';

import { GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';

import {
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGINATION_ITEMS_PER_PAGE,
} from './DataGrid.constants';

import * as S from './DataGrid.style';
import ArrowUpAndDown from '../../assets/svgComponents/ArrowUpAndDown';
import ArrowUpAndDownInverted from '../../assets/svgComponents/ArrowUpAndDownInverted';

interface IProps {
    columns: GridColDef[];
    rows: object[];
    pageSizeOptions?: number[];
    fixedHeight?: `${number}rem`;
    disableRowSelectionOnClick?: boolean;
    checkboxSelection?: boolean;
    onRowSelectionModelChange?: (
        // eslint-disable-next-line no-unused-vars
        selectedRowsIndexes: GridRowSelectionModel
    ) => void;
    className?: string;
}

const DataGrid: React.FC<IProps> = ({
    rows,
    columns,
    pageSizeOptions = DEFAULT_PAGINATION_ITEMS_PER_PAGE,
    fixedHeight,
    disableRowSelectionOnClick = false,
    checkboxSelection = false,
    onRowSelectionModelChange = () => null,
    className,
    ...rest
}) => {
    const dataGrid = (
        <S.DataGrid
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: {
                        pageSize: DEFAULT_ITEMS_PER_PAGE,
                    },
                },
            }}
            {...{
                disableRowSelectionOnClick,
                pageSizeOptions,
                checkboxSelection,
            }}
            {...rest}
            sx={{ borderColor: 'transparent' }}
            slots={{
                columnSortedAscendingIcon: ArrowUpAndDown,
                columnSortedDescendingIcon: ArrowUpAndDownInverted,
            }}
            onRowSelectionModelChange={onRowSelectionModelChange}
        />
    );

    return fixedHeight ? (
        <S.HeightSetterWrapper {...{ className, fixedHeight }}>
            {dataGrid}
        </S.HeightSetterWrapper>
    ) : (
        <div {...{ className }}>{dataGrid}</div>
    );
};

export default DataGrid;
