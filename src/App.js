import {Route,Routes} from 'react-router-dom'
import Currencies from './pages/Currencies'
import Main from './pages/Main'
import Price from './pages/Price'
import Nav from './components/Nav'

function App(){
    return(
        <div className="App">
            <Nav />
        <Routes>
            {/* path is the path to the webpage/link that will display on the browser search bar */}
            <Route path="/" element={<Main />}/>
            <Route path="/currencies" element={<Currencies />}/>
            <Route path="/price/:symbol" element={<Price />}/>
        </Routes>
        </div>
    )
}
export default App