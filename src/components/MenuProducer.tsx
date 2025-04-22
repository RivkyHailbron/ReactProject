
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './MenuProducer.css';
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
            <div className="menu-producer">
                {!showInputEmail &&
                    <>
                        <NavLink to={"/producers/AddProducer"}><button> הרשמה </button></NavLink>
                        
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