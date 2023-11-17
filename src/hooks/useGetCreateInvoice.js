import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const useGetCreateInvoice = () => {
    const [invoices, setInvoices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const allInvoices = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('invoice-')) {
                allInvoices.push(JSON.parse(localStorage.getItem(key)));
            }
        }
        setInvoices(allInvoices);
    }, []);

    const handleInvoiceClick = (id) => {
        navigate(`/edit/${id}`);
    };

    const handleCreateInvoice = () => {
        navigate('/create');
    };

    return {
        invoices,
        handleInvoiceClick,
        handleCreateInvoice
    }

}

export default useGetCreateInvoice;