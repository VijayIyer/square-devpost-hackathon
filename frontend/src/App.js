import React from 'react';
import { createRoot } from 'react-dom/client';
function App() {
    return (
        <div>
            This is an App for sellers to upload their products and get paid!
        </div>
    )
}
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);