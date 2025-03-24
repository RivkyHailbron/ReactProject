
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export const MenuProducer = () => {

    const [emailInput, setEmailInput] = useState('');
    const [showInputEmail, setShowInputEmail] = useState(false);

    const navigate = useNavigate();

    const submit = (event: any) => {
        event.preventDefault();
        if (emailInput) {
            navigate(`/producers/ProducerDetails/${emailInput}`);
        }
    }
    return (
        <>
            <div>
                {!showInputEmail &&
                    <>
                        <NavLink to={"/producers/AddProducer"}><button>הרשמה</button></NavLink><br />
                        <button onClick={() => setShowInputEmail(true)}>כניסה</button>
                    </>
                }
                {showInputEmail &&
                    <form onSubmit={submit}>
                        <input
                            type="email"
                            name="email"
                            value={emailInput}
                            placeholder="email"
                            onChange={(e) => setEmailInput(e.target.value)}
                        />
                        <button type="submit">sign in by email</button>
                    </form>
                }
            </div>
        </>
    )
}
export default MenuProducer;