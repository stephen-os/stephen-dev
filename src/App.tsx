import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Home Page */}
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}