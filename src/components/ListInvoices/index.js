import React from 'react';
import useGetCreateInvoice from "../../hooks/useGetCreateInvoice";
import { InvoiceListContainer, InvoiceItem, Header, CreateButton } from "./styles";

const ListInvoices = () => {
    const {
        invoices= [],
        handleInvoiceClick = () => {},
        handleCreateInvoice = () => {},
    } = useGetCreateInvoice();

    return (
        <InvoiceListContainer>
            <Header>
                <h1>List of Invoices</h1>
                <CreateButton onClick={handleCreateInvoice}>Create Invoice</CreateButton>
            </Header>
            {invoices.map((invoice, index) => (
                <InvoiceItem key={index} onClick={() => handleInvoiceClick(invoice.id)}>
                    <h3>Invoice #{invoice.invoiceNumber}</h3>
                    <p>Client: {invoice.name}</p>
                    <p>Total: ${invoice.lineItems.reduce((acc, item) => acc + (item.quantity * item.rate), 0).toFixed(2)}</p>
                </InvoiceItem>
            ))}
        </InvoiceListContainer>
    );
};

export default ListInvoices;
