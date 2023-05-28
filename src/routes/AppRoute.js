import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import ListPage from './ListPage';

function AppRoute() {
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
                  <ProtectedRoute isSignedIn={false}>
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
