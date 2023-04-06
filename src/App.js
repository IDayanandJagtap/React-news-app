import React , {Component} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Navbar from './Components/Navbar';
import News from './Components/News';


export class App extends Component{
  query = window.location.href.split("q=");
  pageSize = 6;

  state = {
    progress : 0,

  }
  setProgress = async(progress) =>{
      this.setState({progress : progress}) 
  }
  
  render(){
    return(
      <>
        <BrowserRouter >
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress}
          onLoaderFinished={() => this.setProgress(0)}
        />
            {
              this.query.length >=2 ? <News setProgress={this.setProgress}  key={"/" + this.query} country="in" query={this.query[1]} pageSize={this.pageSize}/> : 
            <Routes>
              <Route path="/" element={<News setProgress={this.setProgress}  key="/" country="in" category="general" pageSize={this.pageSize}/>}></Route>
              <Route path="/business" element={<News setProgress={this.setProgress}  key="/business" country="in" category="business" pageSize={this.pageSize}/>}></Route>
              <Route path="/entertainment" element={<News setProgress={this.setProgress}  key="/entertainment" country="in" category="entertainment" pageSize={this.pageSize}/>}></Route>
              <Route path="/technology" element={<News setProgress={this.setProgress}  key="/technology" country="in" category="technology" pageSize={this.pageSize}/>}></Route>
              <Route path="/science" element={<News setProgress={this.setProgress}  key="/science" country="in" category="science" pageSize={this.pageSize}/>}></Route>
              <Route path="/sports" element={<News setProgress={this.setProgress}  key="/sports" country="in" category="sports" pageSize={this.pageSize}/>}></Route>
              <Route path="/health" element={<News setProgress={this.setProgress}  key="/health" country="in" category="health" pageSize={this.pageSize}/>}></Route>
            </Routes>
          }
          
        

        </BrowserRouter>
      </>
    )
  }
}

export default App;