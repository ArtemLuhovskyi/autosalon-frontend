import Footer from "../components/Footer";
import HeaderCar from "../components/HeaderCar";
import useFixed from "../hooks/useFixed";
import { useEffect, useState } from 'react';
import '../css/form.css';
import '../css/test.css';
import useForm from "../hooks/useForm";
import Modal from "../components/Modal";


export default function TestDrivePage() {
    const { contactFields, orderSubmitted, handleChange, handleSubmit, errors } = useForm();
    const fixed = useFixed();
    const [showCalendar, setShowCalendar] = useState(false);

    const handleToggleCalendar = () => {
        setShowCalendar(true);
    };

    useEffect(() => {
        document.title = `Test Drive - form`;
    }, []);
    
    return (
    <>
        <HeaderCar title="Test Drive - form" fixed={fixed} />
        <div className="intro__test" id="intro"></div>
    <div className="buy-auto">
        <div className="container">
                
            {orderSubmitted ? <Modal /> : null}
                    
            <h1>Запис на тест-драйв</h1>
                <form onSubmit={handleSubmit}>
                    <div className="forma">
                        <div className="left-forma">
                            <div className="block">
                                <div className="name">Ім'я *</div>
                                <input
                                    type="text"
                                    name="username"
                                    value={contactFields.username}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="block">
                                <div className="name">Прізвище</div>
                                <input
                                    type="text"
                                    name="company_name"
                                    value={contactFields.company_name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="block">
                                <div className="name">Телефон</div>
                                <input
                                    type="tel"
                                    name="telephone"
                                    value={contactFields.telephone}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.telephone && <div className="error" >{errors.telephone}</div>}
                            </div>
                            <div className="block">
                                <div className="name">Ел. пошта *</div>
                                <input
                                    type="email"
                                    name="email"
                                    value={contactFields.email}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.email && <div className="error">{errors.email}</div>}
                            </div>
                            <div className="block">
                                <div className="name">Бажаний час</div>
                                <input
                                    onClick={handleToggleCalendar}
                                    type={showCalendar ? "date" : "text"}
                                    name="time"
                                    value={contactFields.time}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            </div>
                        <div className="right-forma">
                            <div className="block">
                                <div className="name">Яке авто будемо тестувати?</div>
                                 <select
                                    name="type"
                                    value={contactFields.type}
                                    onChange={handleChange}
                                    required>
                                    <option value="">...</option>
                                    <option value="BMW 7-серії">BMW 7-серії</option>
                                    <option value="Bugatti Veyron">Bugatti Veyron</option>
                                    <option value="Lamborghini Huracan LP610-4">Lamborghini Huracan LP610-4</option>
                                    <option value="Land Rover Defender 90">Land Rover Defender 90</option>
                                    <option value="Porsche 911 Carrera">Porsche 911 Carrera</option>
                                    <option value="Tesla Model X P100D">Tesla Model X P100D</option>
                                </select>
                            </div>
                            <div className="block">
                                <div className="name">Побажання у кольорі</div>
                                 <select
                                    name="other_specify"
                                    value={contactFields.other_specify}
                                    onChange={handleChange}
                                    required>
                                    <option value="">...</option>
                                    <option value="Чорний">Чорний</option>
                                    <option value="Сірий">Сірий</option>
                                    <option value="Білий">Білий</option>
                                    <option value="Червоний">Червоний</option>
                                    <option value="Зелений">Зелений</option>
                                    <option value="Інший">Інший</option>
                                </select>
                            </div>
                            <div className="block-radio">
                                    <div className="name">Авто повинно бути на</div>
                                    <div className="block-radio__block name">
                                        <input 
                                        name="auto" 
                                        type="radio" 
                                        value="Автоматі" 
                                        required 
                                        id="1"
                                        checked={contactFields.auto === "Автоматі"}
                                        onChange={handleChange}/>
                                        <label htmlFor="1">Автоматі</label></div>
                                    <div className="block-radio__block name">
                                        <input 
                                        name="auto" 
                                        type="radio" 
                                        value="Механиці" 
                                        required 
                                        id="2"
                                        checked={contactFields.auto === "Механиці"}
                                        onChange={handleChange}/>
                                        <label htmlFor="2">Механиці</label></div>
                            </div>
                            <div className="block">
                                <div className="name">Ваші побажання</div>
                                <textarea
                                    name="textarea"
                                    className="area__test"
                                    value={contactFields.textarea}
                                    onChange={handleChange}></textarea>
                            </div>
                            <div className="block block-btn btn--test">
                                <button type="submit">Надіслати форму</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </>
        
    )
}