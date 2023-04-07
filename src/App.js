import React , {useState} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Navbar from './Components/Navbar';
import News from './Components/News';


const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API ;

  const [progress, setProgress] = useState(0);
  
    return(
      <>
        <BrowserRouter >
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
            <Routes>
              <Route path="/" element={<News apiKey={apiKey} setProgress={setProgress}  key="/" country="in" category="general" pageSize={pageSize}/>}></Route>
              <Route path="/business" element={<News apiKey={apiKey} setProgress={setProgress}  key="/business" country="in" category="business" pageSize={pageSize}/>}></Route>
              <Route path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress}  key="/entertainment" country="in" category="entertainment" pageSize={pageSize}/>}></Route>
              <Route path="/technology" element={<News apiKey={apiKey} setProgress={setProgress}  key="/technology" country="in" category="technology" pageSize={pageSize}/>}></Route>
              <Route path="/science" element={<News apiKey={apiKey} setProgress={setProgress}  key="/science" country="in" category="science" pageSize={pageSize}/>}></Route>
              <Route path="/sports" element={<News apiKey={apiKey} setProgress={setProgress}  key="/sports" country="in" category="sports" pageSize={pageSize}/>}></Route>
              <Route path="/health" element={<News apiKey={apiKey} setProgress={setProgress}  key="/health" country="in" category="health" pageSize={pageSize}/>}></Route>
            </Routes>
          
        

        </BrowserRouter>
      </>
    )
}

export default App;