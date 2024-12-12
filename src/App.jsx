import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import LoginRegister from "./pages/LoginRegister";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Auth from "./components/Auth";

function App() {
    return (
        <div id="app" data-theme="dark">
            <div id="container">
                <BrowserRouter>
                    <Routes>
                        <Route element={<Auth />} path="/login" />

                        <Route element={<ProtectedRoutes />}>
                            <Route element={<Notes />} path="/" />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
