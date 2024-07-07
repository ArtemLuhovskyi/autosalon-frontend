import React, { useEffect, useState } from 'react';
import '../css/form.css';
import Modal from '../components/Modal';
import HeaderCar from '../components/HeaderCar';
import useFixed from '../hooks/useFixed';
import Footer from '../components/Footer';
import useForm from '../hooks/useForm';

const BuyPage: React.FC = () => {
    const { contactFields, orderSubmitted, handleChange, handleSubmit, errors } = useForm();
    
    const fixed = useFixed();
    
    useEffect(() => {
        document.title = `Buy - form`;
    }, []);

    return (
    <>
    <HeaderCar title="Buy - form" fixed={fixed} />
    <div className="intro-buy" id="intro"></div>
    <div className="buy-auto">
        <div className="container">
                
            {orderSubmitted ? <Modal /> : null}
                    
            <h1>Придбання авто</h1>
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
                            </div>
                        <div className="right-forma">
                            <div className="block">
                                <div className="name">Яке авто берем?</div>
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
                                <div className="name">Ваші побажання</div>
                                <textarea
                                    name="textarea"
                                    className="area__buy__connection"
                                    value={contactFields.textarea}
                                    onChange={handleChange}></textarea>
                            </div>
                            <div className="block block-btn">
                                <button type="submit">Надіслати форму</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </>
    );
};

export default BuyPage;
