import { useParams } from "react-router-dom";
import { useHttp } from "../custom-hooks/useHttp"
import { Producer } from "../types/Producer"
import { useEffect, useState } from "react";
import { EventListProducer } from "./EventListProducer";

export const ProducerDetails = () => {
<<<<<<< HEAD
    const email = useParams<{ email: string }>().email;
    const [updateProducer, setUpdateProducer] = useState(false);
    const [addEvent, setAddEvent] = useState(false);

    const { data, request: getRequest } = useHttp<Producer>(`/producer/${email}`, 'get');
    const { isLoading, error, request: putRequest } = useHttp<Producer>(`/producer/${email}`, 'put');
    console.log("data", data);
    useEffect(() => {
        try {
            if (email) {
                getRequest();
            }
        }
        catch (error) {
            console.log("error", error);
        }

    }, [email, getRequest]);
    const submitProducer = async (event: any) => {
        event.preventDefault();
        const updateProducer: Producer = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            description: event.target.description.value
        }
        try {
            // await putRequest(updateProducer);
             putRequest(updateProducer);
            setUpdateProducer(false);
            getRequest();
            event.target.reset();
        } catch (error) {
            console.log("error", error);
        }
    }
    return <>
        <h1>פרטי מפיק</h1>
        {data && (
            <div>
                <h2>{data.name}</h2>
                <p>{data.email}</p>
                <p>{data.phone}</p>
                <p>{data.description}</p>

                {!updateProducer && <button onClick={() => setUpdateProducer(true)}>Update Producer</button>}

                {updateProducer &&
                    <form onSubmit={submitProducer}>

                        <label htmlFor="name">שם מפיק/ה </label>
                        <input type="text" defaultValue={data.name} name="name" />
                        <br />
                        <label htmlFor="phone">טלפון </label>
                        <input type="phone" defaultValue={data.phone} name="phone" />
                        <br />
                        <label htmlFor="email">מייל </label>
                        <input type="email" defaultValue={data.email} name="email" />
                        <br />
                        <label htmlFor="description">תיאור </label>
                        <input type="text" defaultValue={data.description} name="description" />
                        <br />
                        <button disabled={isLoading} type="submit">Update Producer</button>
                        {error && <p className="error">{error}</p>}
                    </form>}
            </div>
        )}
        <EventListProducer/>
    </>
}
=======
    return <></>
}
>>>>>>> 406c578b17aba53b5dcd34211c6ab0ec617218a6
