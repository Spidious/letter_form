import { Routes, Route } from 'react-router-dom';
import Form from './routes/form/Form';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Form />} />
        </Routes>
    );
}