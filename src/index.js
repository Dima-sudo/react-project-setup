import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './root/root.component';

const root = createRoot(document.getElementById('root'));
root.render(<Root />);
