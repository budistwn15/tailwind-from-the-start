import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import Button from './views/Button';

function app() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/button' element={<Button/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default app;
