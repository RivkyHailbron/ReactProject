import { useHttp } from "../custom-hooks/useHttp";
import { Producer } from "../types/Producer";
import { toast } from "react-toastify";

export const AddProducer = () => {
<<<<<<< HEAD
    const { request } = useHttp<Producer>('/producer', 'post');

    const createProducer = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const data: Producer = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            description: formData.get('description') as string
        };
        try {
            // await request(data);
            request(data);
            toast.success("נרשמת בהצלחה");
            form.reset();
        } catch (err) {
            toast.error("אירעה שגיאה בהרשמה. נסה שוב.");
        }
    };

    return (
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
    );
};
=======
    return <>
        <form action=""></form>
    </>
}
>>>>>>> 406c578b17aba53b5dcd34211c6ab0ec617218a6
