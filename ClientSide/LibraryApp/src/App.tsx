

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Homepage from './Homepage';
import BookList from './BookList';
import AuthorsList from './AuthorsList';

function App() {


    return (
        <Router>
            <div>
                <Navigation/>
                <div className="pt-20">
                    <Routes>
                        <Route path="/" element={<Homepage/>}/>
                        <Route path="/books" element={<BookList/>}/>
                        <Route path="/authors" element={<AuthorsList/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
);
}

export default App
