import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Setup from '../../tests/setup/setup';
import SideMenu from './SideMenu';
import { DataTestIds } from './SideMenu.constants';

const mockedUseNavigate = jest.fn();
const mockedUseLocation = jest.fn();

jest.mock('react-router-dom', () => ({
    // Import non-mocked library and use other functionalities and hooks
    ...jest.requireActual('react-router-dom'),

    // Mock the required hooks
    useNavigate: () => mockedUseNavigate,
    useLocation: () => mockedUseLocation,
}));

describe('Tests SideMenu component functionality', () => {
    it('Snapshots component', () => {
        render(
            <Setup>
                <SideMenu />
            </Setup>
        );

        expect(
            screen.getByTestId(DataTestIds.COMPONENT_CONTAINER)
        ).toMatchSnapshot();
    });

    it('Snapshots component', () => {
        render(
            <Setup>
                <SideMenu />
            </Setup>
        );

        expect(
            screen.getByTestId(DataTestIds.COMPONENT_CONTAINER)
        ).toMatchSnapshot();
    });

    it('Expands and collapses correctly', async () => {
        render(
            <Setup>
                <SideMenu />
            </Setup>
        );

        const arrowButton = screen.getByTestId(DataTestIds.ARROW_TOGGLE_BUTTON);

        const logo = screen.queryByTestId(DataTestIds.APP_NAME);

        expect(logo).toBeTruthy();
        expect(logo).toHaveTextContent('FW Optimization');

        fireEvent.click(arrowButton);

        await waitFor(() => {
            const collapsedLogoTextEl = screen.queryByTestId(
                DataTestIds.APP_NAME
            );
            expect(collapsedLogoTextEl).not.toHaveTextContent(
                'FW Optimization'
            );
        });
    });
});
