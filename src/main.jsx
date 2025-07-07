import ReactDOM from 'react-dom/client';
import AppRouter from './router/AppRouter';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './App/store';
import App from "./App";

// Muat data pengguna dari localStorage saat aplikasi dimulai

ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}>
     <App />
   </Provider>
);

