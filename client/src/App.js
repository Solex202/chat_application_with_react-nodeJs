import React from "react";
import { Routes, Route, BrowserRouter} from 'react-router-dom';

import Join from './components/Join';
import Chat from './components/Chat';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/"  element={<Join/>}/>
            <Route path="/chat" element={<Chat/>}/>
        </Routes>
    </BrowserRouter>

);

export default App;