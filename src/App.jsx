import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import Button from './views/Button';
import Grid from './views/Grid';

function app() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/button' element={<Button/>} />
                <Route path='/grid' element={<Grid/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default app;
