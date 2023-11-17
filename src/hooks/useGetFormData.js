import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useFieldArray, useForm} from "react-hook-form";

const useGetFormData = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();

    const { id } = useParams();

    const { register, control, handleSubmit, reset, formState: { errors }, watch } = useForm({
        defaultValues: {
            invoiceNumber: '',
            name: '',
            billTo: '',
            shipTo: '',
            lineItems: [{ description: 'Item', quantity: 1, rate: 10 }],
            remark: ''
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

    useEffect(() => {
        const storedInvoiceData = localStorage.getItem(`invoice-${id}`);
        if (storedInvoiceData) {
            const invoiceData = JSON.parse(storedInvoiceData);
            reset(invoiceData);
        } else {
            console.log('Invoice not found');
        }
    }, [id, reset]);

    const onSubmit = (data) => {
        const invoiceId = id || Date.now();
        const invoiceData = { ...data, id: invoiceId };
        localStorage.setItem(`invoice-${invoiceId}`, JSON.stringify(invoiceData));
        navigate('/');
    };


    return {
        totalPrice,
        register,
        control,
        handleSubmit,
        errors,
        fields,
        append,
        remove,
        onSubmit
    }
}

export default useGetFormData;