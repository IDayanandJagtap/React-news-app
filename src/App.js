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
  
  
  render(){
    return(
      <>
        <BrowserRouter >
        <Navbar />
            {console.log(this.query)}
            {
              this.query.length >=2 ? <News key={"/" + this.query} country="in" query={this.query[1]} pageSize={9}/> : 
            <Routes>
              <Route path="/" element={<News key="/" country="in" category="general" pageSize={9}/>}></Route>
              <Route path="/business" element={<News key="/business" country="in" category="business" pageSize={9}/>}></Route>
              <Route path="/entertainment" element={<News key="/entertainment" country="in" category="entertainment" pageSize={9}/>}></Route>
              <Route path="/technology" element={<News key="/technology" country="in" category="technology" pageSize={9}/>}></Route>
              <Route path="/science" element={<News key="/science" country="in" category="science" pageSize={9}/>}></Route>
              <Route path="/sports" element={<News key="/sports" country="in" category="sports" pageSize={9}/>}></Route>
            </Routes>
          }
          
        

        </BrowserRouter>
      </>
    )
  }
}

export default App;