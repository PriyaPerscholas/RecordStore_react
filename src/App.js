import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import './App.css';
import Index from './Components/Index';
import New from './Components/New';
import Show from './Components/Show';
import Update from './Components/Update';

function App() {
       return (
              <Router>
                     <nav>
                            <Link to='/'>Home</Link><br />
                            <Link to='/new'>Add Record</Link>
                     </nav>
                     <Routes>
                            <Route path="/" element={<Index />} />
                            <Route path="/:id" element={<Show />} />
                            <Route path='/new' element={<New />} />
                            <Route path='/:id/edit' element={<Update />} />
                     </Routes>
              </Router>
       )
}
export default App