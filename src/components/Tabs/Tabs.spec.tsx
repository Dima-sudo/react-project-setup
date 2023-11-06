import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Setup from '../../tests/setup/setup';
import { DataTestIds } from './Tabs.constants';
import Tabs from './Tabs';

describe('Tabs test suite', () => {
    it('Renders Tabs component correctly', () => {
        const tabs = [
            { label: 'tab1', content: <div>content1</div> },
            { label: 'tab2', content: <div>content2</div> },
        ];

        render(
            <Setup>
                <Tabs tabs={tabs} />
            </Setup>
        );

        const tabsComponent = screen.getByTestId(
            DataTestIds.COMPONENT_CONTAINER
        );

        expect(tabsComponent).toBeInTheDocument();
    });

    it('Snapshots component', () => {
        const tabs = [
            { label: 'tab1', content: <div>content1</div> },
            { label: 'tab2', content: <div>content2</div> },
        ];

        render(
            <Setup>
                <Tabs tabs={tabs} />
            </Setup>
        );

        const tabsComponent = screen.getByTestId(
            DataTestIds.COMPONENT_CONTAINER
        );

        expect(tabsComponent).toMatchSnapshot();
    });

    it('Recognizes disabled tabs', () => {
        const tabs = [
            { label: 'tab0', content: <div>content0</div> },
            { label: 'tab1', content: <div>content1</div>, isDisabled: true },
        ];

        render(
            <Setup>
                <Tabs tabs={tabs} />
            </Setup>
        );

        const disabledTab = screen.getByTestId('tabs-tab__1');

        expect(disabledTab).toBeDisabled();
    });
});
