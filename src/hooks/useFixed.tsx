import { useEffect, useState } from 'react';

export default function useFixed() {
    const [fixed, setFixed] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Функция для прокрутки вверх страницы при переходе на новую страницу
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Вызываем функцию прокрутки вверх при загрузке новой страницы
    useEffect(() => {
        scrollToTop();
    }, []);

    return fixed;
}
