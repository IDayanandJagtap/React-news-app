import React , {Component} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export class App extends Component{
  render(){
    return(
      <>
        <Navbar />
        <News country="in" category="science" pageSize={9}/>
      </>
    )
  }
}

export default App;