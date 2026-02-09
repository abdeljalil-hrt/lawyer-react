import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// CSS Imports
import './assets/css/bootstrap.min.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/font-awesome.min.css';
import './assets/css/themify-icons.css';
import './assets/css/nice-select.css';
import './assets/css/flaticon.css';
import './assets/css/gijgo.css';
import './assets/css/slicknav.css';
import './assets/css/style.css';
import './index.css';
import 'leaflet/dist/leaflet.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
