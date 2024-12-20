import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/app/layout/styles.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router/Routes';
// import { StoreProvider } from './app/context/StoreContext';
//import { configureStore } from './app/store/configureStore';
import { store } from './app/store/configureStore';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//const store = configureStore();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
