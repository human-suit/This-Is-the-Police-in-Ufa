import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app/App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Layout } from './widgets';
import { ErrorPage } from './pages';
import { Provider } from 'react-redux';
import { store } from './app/store';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<App />} />
      {/* <Route path="/about" element={<AboutPage />} />
      <Route path="/vacancies" element={<App />} />
      <Route path="/vacancies/city/:city" element={<App />} />
      <Route path="/vacancies/:id" element={<VacancyPage />} /> */}
      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ),
);

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
