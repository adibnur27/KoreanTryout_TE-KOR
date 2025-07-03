import ReactDOM from 'react-dom/client';
import AppRouter from './router/AppRouter';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './App/store';
import { setUser } from './features/auth/authSlice';

// Muat data pengguna dari localStorage saat aplikasi dimulai
const storedUser = localStorage.getItem('user');
if (storedUser) {
  try {
    const user = JSON.parse(storedUser);
    store.dispatch(setUser(user));
  } catch (error) {
    console.error("Gagal memuat user dari localStorage:", error);
    localStorage.removeItem('user'); // Hapus data yang rusak
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}>
     <AppRouter />
   </Provider>
);

