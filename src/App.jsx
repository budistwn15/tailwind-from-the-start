import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import Button from './views/Button';
import Grid from './views/Grid';
import Flex from './views/Flex';
import Container from './views/Container';

function app() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/button' element={<Button/>} />
                <Route path='/grid' element={<Grid/>} />
                <Route path='/flex' element={<Flex/>} />
                <Route path="/container" element={<Container/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default app;
