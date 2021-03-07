import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Login from './components/section/Login'
import SignUp from './components/section/SignUp'
import Section from './components/Section';
import {DataProvider} from './components/Context'
import '../node_modules/font-awesome/css/font-awesome.min.css';
// import SearchBar from '.components/section/Search';


class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Section />
            <switch>
            {/* <Route exact path="/search" component= {SearchBar} /> */}
            <Route exact path="/Login" component= {Login} />
            <Route exact path="/signup" component= {SignUp} />
            </switch>
        </Router>
        </div>
        {/* <switch> */}
        {/* <Route exact path="/" component= {Home} /> */}
        
        {/* <Route exact path="/Services" component= {Services} /> */}
        {/* <Route exact path="/ContactUs" component= {ContactUs} /> */}
        {/* <Redirect to="/" /> */}
        {/* </switch> */}
      </DataProvider>

    
    );
  }
}

export default App;
