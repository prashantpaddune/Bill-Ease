import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import ListInvoices from "./components/ListInvoices";
import CreateInvoice from "./components/CreateInvoice";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ListInvoices />} />
                <Route path="/create" element={<CreateInvoice />} />
                <Route path="/edit/:id" element={<CreateInvoice />} />
            </Routes>
        </Router>
    );
}

export default App;
