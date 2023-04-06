import React , {Component} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import News from './Components/News';


export class App extends Component{
  query = window.location.href.split("q=");
  pageSize = 6;
  
  render(){
    return(
      <>
        <BrowserRouter >
        <Navbar />
            {
              this.query.length >=2 ? <News key={"/" + this.query} country="in" query={this.query[1]} pageSize={this.pageSize}/> : 
            <Routes>
              <Route path="/" element={<News key="/" country="in" category="general" pageSize={this.pageSize}/>}></Route>
              <Route path="/business" element={<News key="/business" country="in" category="business" pageSize={this.pageSize}/>}></Route>
              <Route path="/entertainment" element={<News key="/entertainment" country="in" category="entertainment" pageSize={this.pageSize}/>}></Route>
              <Route path="/technology" element={<News key="/technology" country="in" category="technology" pageSize={this.pageSize}/>}></Route>
              <Route path="/science" element={<News key="/science" country="in" category="science" pageSize={this.pageSize}/>}></Route>
              <Route path="/sports" element={<News key="/sports" country="in" category="sports" pageSize={this.pageSize}/>}></Route>
              <Route path="/health" element={<News key="/health" country="in" category="health" pageSize={this.pageSize}/>}></Route>
            </Routes>
          }
          
        

        </BrowserRouter>
      </>
    )
  }
}

export default App;