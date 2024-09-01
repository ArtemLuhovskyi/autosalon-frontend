import { useState, ChangeEvent, FormEvent } from 'react';

export interface ContactFields {
    username: string;
    company_name: string;
    telephone: string;
    email: string;
    time?: string;
    type: string;
    other_specify?: string;
    auto: string;
    textarea: string;
}

const initialFormState: ContactFields = {
    username: '',
    company_name: '',
    telephone: '',
    email: '',
    time: '',
    type: '',
    other_specify: '',
    auto: '',
    textarea: '',
};

const useForm = () => {
    const [orderSubmitted, setOrderSubmitted] = useState(false);
    const [contactFields, setContactFields] = useState<ContactFields>(initialFormState);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setContactFields(prevFields => ({
            ...prevFields,
            [name]: value,
        }));
    };

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePhone = (phone: string) => {
        const re = /^[0-9\b]+$/;
        return re.test(phone);
    };  
    const handleValidation = () => {
        const newErrors: { [key: string]: string } = {};

        if (!validateEmail(contactFields.email)) {
            newErrors.email = 'Неправильний формат ел. пошти';
        }

        if (!validatePhone(contactFields.telephone)) {
            newErrors.telephone = 'Неправильний формат телефону';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (handleValidation()) {
            const cleanedFields = Object.fromEntries(
                Object.entries(contactFields).filter(([_, value]) => value.trim() !== '')
            );
            setOrderSubmitted(true);
            setContactFields(initialFormState);
        }
    };

    return { contactFields, orderSubmitted, handleChange, handleSubmit, validateEmail, validatePhone, errors };
};

export default useForm;
