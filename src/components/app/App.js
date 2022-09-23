import {lazy, Suspense} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const AppHeader = lazy(() => import ("../appHeader/AppHeader"));
const MainPage = lazy(() => import ("../pages/MainPage"));
const BeforePage = lazy(() => import ('../pages/BeforePage'));

const App = () => {

  return (
    <BrowserRouter>
      <div className="appCV">
        <AppHeader/>
        <main>
          <Suspense>
            <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path='/before' element={<BeforePage/>}/>
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;