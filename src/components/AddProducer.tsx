import { useHttp } from "../custom-hooks/useHttp";
import { Producer } from "../types/Producer";
import { toast } from "react-toastify";

export const AddProducer = () => {
    const { error, request } = useHttp<Producer>('/producer', 'post');

    const createProducer = async (event: any) => {
        event.preventDefault();

        const form = event.currentTarget;
        // const formData = new FormData(form);
        const newProducer: Producer = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            description: event.target.description.value
        };
        try {
            // await request(data);
            request("", newProducer);
            toast.success("נרשמת בהצלחה");
            form.reset();
        } catch (err) {
            toast.error("אירעה שגיאה בהרשמה. נסה שוב.");
        }
    };

    return <>
        <form onSubmit={createProducer}>
            <label htmlFor="name">שם מפיק/ה</label>
            <input type="text" name="name" id="name" /><br />
            <label htmlFor="email">מייל</label>
            <input type="email" name="email" id="email" /><br />
            <label htmlFor="phone">טלפון</label>
            <input type="text" name="phone" id="phone" /><br />
            <label htmlFor="description">תיאור</label>
            <input type="text" name="description" id="description" /><br />
            <button type="submit">הרשמה</button>
        </form>
        {error && <span>{error}</span>}

    </>
};

