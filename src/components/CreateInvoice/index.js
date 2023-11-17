import React, {useEffect, useState} from 'react';
import {useFieldArray, useForm} from "react-hook-form";
import {
    InvoiceContainer,
    Button,
    ErrorMessage,
    LineItem,
    LineItemsContainer,
    LineInput,
    Input,
    Header,
    Label,
    Title,
    TextArea,
    FieldSet,
    Footer,
    Total
} from "./styles";

const Invoice = () => {
    const [totalPrice, setTotalPrice] = useState(0);

    const { register, control, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: {
            lineItems: [{ description: '', quantity: 1, rate: 0 }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'lineItems',
    });

    const lineItems = watch('lineItems');

    useEffect(() => {
        const total = lineItems.reduce((acc, item) => acc + (item.quantity || 0) * (item.rate || 0), 0);
        setTotalPrice(total);
    }, [lineItems]);

    const onSubmit = (data) => {
        const uniqueID = Date.now();
        const invoiceData = { ...data, id: uniqueID };
        localStorage.setItem(`invoice-${uniqueID}`, JSON.stringify(invoiceData));
    };

    return (
        <InvoiceContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Header>
                    <Title>Invoice</Title>
                </Header>

                <FieldSet>
                    <Label>Invoice Number</Label>
                    <Input {...register('invoiceNumber', { required: 'Invoice number is required' })} type="text" placeholder="1234" />
                    {errors.invoiceNumber && <ErrorMessage>{errors.invoiceNumber.message}</ErrorMessage>}
                </FieldSet>

                <FieldSet>
                    <Label>Name</Label>
                    <Input {...register('name', { required: 'Name is required' })} type="text" placeholder="Client name" />
                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                </FieldSet>

                <FieldSet>
                    <Label>Bill To</Label>
                    <TextArea {...register('billTo', { required: 'Billing information is required',  })} placeholder="Client's Address" />
                    {errors.billTo && <ErrorMessage>{errors.billTo.message}</ErrorMessage>}
                </FieldSet>

                <FieldSet>
                    <Label>Ship To</Label>
                    <TextArea {...register('shipTo', { required: 'Shipping information is required' })} placeholder="Shipping Address"/>
                    {errors.shipTo && <ErrorMessage>{errors.shipTo.message}</ErrorMessage>}
                </FieldSet>

                    <Button type="button" onClick={() => append({ description: '', quantity: 1, rate: 0 })}>
                        Add Line Item
                    </Button>

                <LineItemsContainer>
                    {fields.map((item, index) => (
                        <LineItem key={item.id}>
                            <LineInput {...register(`lineItems.${index}.description`, { required: 'Description is required' })} type="text" placeholder="Description" />
                            <LineInput {...register(`lineItems.${index}.quantity`, { required: 'Quantity is required' })} type="number" placeholder="Quantity" />
                            <LineInput {...register(`lineItems.${index}.rate`, { required: 'Rate is required' })} type="number" placeholder="Rate" />
                        </LineItem>
                    ))}
                </LineItemsContainer>

                <FieldSet>
                    <Label>Remarks</Label>
                    <TextArea {...register('Remark')} rows="4" />
                </FieldSet>
                <Footer>
                    <Button type="submit">Submit Invoice</Button>
                    <Total>Total: ${totalPrice.toFixed(2)}</Total>
                </Footer>
            </form>

        </InvoiceContainer>
    );
};

export default Invoice;
