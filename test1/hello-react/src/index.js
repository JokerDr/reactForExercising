// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
class Title extends Component{
    render(){
        return (
            <h1>学海无涯</h1>
        )
    }
}
class Header extends Component{
    render(){
        return (
          <div>
                <Title />
                <h2>this is header</h2>
            </div>  
        )
    }
}
class Main extends Component{
    render(){
        return (
            <div>
                <h2>this is main content</h2>
            </div>
        )
    }
}
class Footer extends Component{
    render(){
        return (
            <div>
                <h2>this is footer</h2>
            </div>
        )
    }
}
class Index extends Component{
    render(){
       return (
           <div>
             <Header />
             <Main />
             <Footer />  
        </div>
       ) 
       
    }
}
ReactDOM.render(
    <Index />,
    document.getElementById('root')
)