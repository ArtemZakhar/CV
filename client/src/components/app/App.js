import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Spinner from './../spinner/Spinner';
import AppHeader from '../appHeader/AppHeader';

const MainPage = lazy(() => import('../../pages/MainPage'));
const ExpirienceObtainedBeforeJS = lazy(() =>
  import('../../pages/ExpirienceObtainedBeforeJS')
);
const ExpirienceObtainedAfterJS = lazy(() =>
  import('../../pages/ExpirienceObtainedAfterJS')
);
const Page404 = lazy(() => import('../../pages/404'));

const App = () => {
  return (
    <BrowserRouter>
      <div className='appCV'>
        <Suspense fallback={<Spinner />}>
          <AppHeader />
          <main>
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/before' element={<ExpirienceObtainedBeforeJS />} />
              <Route path='/after' element={<ExpirienceObtainedAfterJS />} />
              <Route path='*' element={<Page404 />} />
            </Routes>
          </main>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
