import React from 'react';
import Tabs from '../../components/Tabs/Tabs';

const DataLake = () => {
    const tabs = [
        {
            label: 'Tab One',
            content: <div>Content One</div>,
        },
        {
            label: 'Tab Two',
            content: <div>Content Two</div>,
        },
        {
            label: 'Tab Three',
            content: <div>Content Three</div>,
        },
    ];
    return <Tabs tabs={tabs} />;
};

export default DataLake;
