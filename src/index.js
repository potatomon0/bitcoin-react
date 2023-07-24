import {StrictMode} from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import App from './App'
//--------------------------------------------------------------------------------
import {BrowserRouter as Router} from 'react-router-dom'//BrowserRouter is given an alias Router
//or it could be understanded as Router is given the value of BrowserRouter

ReactDOM.render(
    //strict mode is for testing purposes, it gives warning to potential error and bug
    <StrictMode>
        <Router>
            {/* wrapping App in here gives it ability to use Router/aka browser router */}
            <App/>
        </Router>
    </StrictMode>,
    document.getElementById('root')
    //superimpose everything we create in our app into the root div in ./public/index.html
)
