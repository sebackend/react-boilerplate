import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function MainLayout() {
  return (
    <div>
      <h1>Layout</h1>
      <main>
        <h4>Test</h4>
        <Outlet />
      </main>
    </div>
  );
}

function PublicRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function AppRouter() {
  return <PublicRoutes />;
}

export default AppRouter;
