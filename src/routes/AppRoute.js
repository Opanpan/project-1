import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import ListPage from './ListPage';

function AppRoute() {
  const user = localStorage.getItem('user');

  return (
    <BrowserRouter>
      <Routes>
        {ListPage().map((el, i) => {
          if (el.isPrivate) {
            return (
              <Route
                path={el.path}
                key={i}
                element={
                  <ProtectedRoute isSignedIn={user}>
                    {el.component}
                  </ProtectedRoute>
                }
              />
            );
          }
          return <Route path={el.path} key={i} element={el.component} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
