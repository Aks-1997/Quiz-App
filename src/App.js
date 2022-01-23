import React, {Suspense} from 'react';
import './App.css';
import Home from './Component/Home/Home';
import {Routes,Route} from 'react-router-dom';
const Result = React.lazy(()=>import('./Component/Result/Result'));

const App = () => {

  return (
    <React.Fragment>
      <Suspense fallback={()=>null}>
        <Routes>
          <Route path="/Result" element={<Result/>} />
          <Route path="/" exact element={<Home/>} />
        </Routes>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
