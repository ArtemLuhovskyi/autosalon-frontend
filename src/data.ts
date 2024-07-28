export interface ICar {
    id: number;
    img: string;
    title: string;
    description: string;
    price: number[];
    additional_info?: {
        hero_image: string;
        images_gallery: string[];
        characteristics_table: string;
        descriptions: {
            text: string;
            images?: string[];
        }[];
    };
    
}

export const dataCars: ICar[] = [
    {
        id: 1,
        img: '/img/BMW/main.jpg',
        title: "BMW 7 Series",
        description: "Розкішний і комфортний седан для вимогливих водіїв.",
        price: [68493, 104110],
        additional_info: {
            hero_image:'/img/BMW/bg.jpg',
            images_gallery: [
                    "/img/BMW/01.jpg",
                    "/img/BMW/02.jpg",
                    "/img/BMW/03.jpg",
                    "/img/BMW/04.jpg",
                    "/img/BMW/05.jpg",
                    "/img/BMW/06.jpg",
            ],
            characteristics_table: `
            <table cellspacing="2">
                            <tr class="first-row-table">
                                <th width=50%></th>
                                <th width=25% class="red-text-table">730d</th>
                                <th width=25% class="red-text-table">750Li xDrive</th>
                            </tr>
                            <tr>
                                <td class="title-table">Тип кузова, кількість дверей, місць</td>
                                <td>седан, 4, 5</td>
                                <td>седан, 4, 4</td>
                            </tr>
                            <tr>
                                <td class="title-table">Довжина/ширина/висота/колісна база, мм</td>
                                <td>5098/ 1902/ 1478/ 3070</td>
                                <td>5298/ 1902/ 1485/ 3210</td>
                            </tr>
                            
                            <tr>
                                <td class="title-table">Об'єм двигуна, куб. см</td>
                                <td>2993</td>
                                <td>4395</td>
                            </tr>
                            <tr>
                                <td class="title-table">Потужність, к.с./об. в хв.</td>
                                <td>265/ 4000</td>
                                <td>450/ 5500-6000</td>
                            </tr>
                            <tr>
                                <td class="title-table">Максимальний крутний момент, Нм/об. в хв.</td>
                                <td>620/ 2000-2500</td>
                                <td>650/ 1800-4500</td>
                            </tr>
                            <tr>
                                <td class="title-table">Коробка передач</td>
                                <td colspan=2>8-ступенева автоматична</td>
                            </tr>
                            <tr>
                                <td class="title-table">Привід</td>
                                <td>задній</td>
                                <td>повний</td>
                            </tr>
                            <tr>
                                <td class="title-table">Споряджена маса, кг</td>
                                <td>1830</td>
                                <td>1990</td>
                            </tr>
                            <tr>
                                <td class="title-table">Повна дозволена маса, кг</td>
                                <td>2450</td>
                                <td>2615</td>
                            </tr>
                            <tr>
                                <td class="title-table">Максимальна швидкість, км/год</td>
                                <td>250</td>
                                <td>250</td>
                            </tr>
                            <tr>
                                <td class="title-table">Розгін до 100 км/год, с</td>
                                <td>6,1</td>
                                <td>4,5</td>
                            </tr>
                            <tr>
                                <td class="title-table">Витрата пального у змішаному циклі, л/100 км</td>
                                <td>4,5</td>
                                <td>8,3</td>
                            </tr>
                            <tr>
                                <td class="title-table">Об'єм багажника, л</td>
                                <td>515</td>
                                <td>515</td>
                            </tr>
                            <tr>
                                <td class="title-table">Кліренс, мм</td>
                                <td>135</td>
                                <td>135</td>
                            </tr>
                            <tr>
                                <td class="title-table">Об'єм паливного бака, л</td>
                                <td>78</td>
                                <td>78</td>
                            </tr>
                            <tr>
                                <td class="title-table">Паливо</td>
                                <td>дизель</td>
                                <td>бензин Аі-92</td>
                            </tr>
                            <tr>
                                <td class="title-table">Вартість моделі, млн грн.</td>
                                <td>від 2,5</td>
                                <td>від 3,2</td>
                            </tr>
                            <tr>
                                <td class="title-table">Наддув</td>
                                <td>турбокомпресор</td>
                                <td>турбокомпресор</td>
                            </tr>
                            <tr>
                                <td class="title-table">Клапанів на циліндр</td>
                                <td>4</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td class="title-table">Передні/Задні гальма</td>
                                <td>дискові вентильовані</td>
                                <td>дискові вентильовані</td>
                            </tr>
                            <tr>
                                <td class="title-table">Клас автомобіля</td>
                                <td>F</td>
                                <td>F</td>
                            </tr>
                        </table>`,
            descriptions: [
                {
                text: "З усіма запахами, звуками, жестами і планшетами «сімка» легка в керуванні на дорозі і поводиться саме так, як очікуєш від великого задньоприводного седана. Трохи задумлива при різких прискореннях з турбодизелем 730d, безкомпромісна по потужності і з трохи більш наповненим кермом повноприводна 750Li xDrive – обидві вони чітко викреслюють ідеальні траєкторії по автобанах навколо постіндустріального Порту і чудово вписуються на звивистих асфальтових доріжках, пробитих крізь виноградні плантації цього краю, що дав світу бренд не менш потужний, ніж BMW. «Сімка», до речі, може овеяти пасажирів якісним портвейном: аромат цього кріпленого вина додали в один з брендованих парфумів седана.",
                images: [
                    "/img/BMW/07.jpg",
                    "/img/BMW/08.jpg",
                ],
            },
            {
                text: "Емар Фегт старанно «робить козу» екрану мультимедійної системи iDrive. Він знову і знову робить її найкращим рішенням, але вперта машина не розуміє його цілком конкретного жесту. Доводиться допомогти – і варто мені махнути рукою, система тут же «врубається», в сенсі включає звук і запалює екран. «Вас вона краще слухає!» – захоплюється Емар. «У мене цей жест відпрацьований... у нас він досить розповсюджений... – скромно зауважую я. – Ви тримайте пальці ширше, ніби хочете комусь виколоти очі, і вона вас відразу зрозуміє», – авторитетно раджу я.",
                images: [
                    "/img/BMW/09.jpg",
                    "/img/BMW/10.jpg",
                ],
            },
            {
                text: "На зламі тисячоліть всі автомобільні компанії прагнули показати щось принципово нове, що порушує шаблони. Найвимогливіші клієнти могли замовити пакет Highline, який, серед іншого, передбачав наявність телефону, факсу, холодильника та інших новомодних приємностей. Важливо ще те, що була проведена серйозна робота по усуненню всіх можливих шумів, що разом з подвійними склом надійно відділяло пасажирів 7-серії від суєти на вулиці. Всі опції описати дуже важко, тому що їх було величезна кількість, але вже тоді були парктронік (спереду і ззаду), оптика з газорозрядними лампами (ксенон), антипробуксовочна система та багато іншого.",
            },
        ]
        },
    },
    {
        id: 2,
        img: '/img/Bugatti/main.jpg',
        title: "Bugatti Veyron",
        description: "Неймовірна швидкість та розкіш у кожній деталі.",
        price: [1232000],
        additional_info: {
            hero_image:'/img/Bugatti/bg.jpg',
            images_gallery: [
                    "/img/Bugatti/01.jpg",
                    "/img/Bugatti/02.jpg",
                    "/img/Bugatti/03.jpg",
                    "/img/Bugatti/04.jpg",
                    "/img/Bugatti/05.jpg",
                    "/img/Bugatti/06.jpg",
            ],
            characteristics_table: `
            <table cellspacing="1">
                        <tr class="first-row-table">
                            <th width=45%></th>
                            <th width=25% class="red-text-table">Bugatti Veyron 16.4</th>
                            <th width=25% class="red-text-table">Bugatti Veyron 16.4 Grand Sport Vitesse</th>
                        </tr>
                        <tr>
                            <td class="title-table">Тип кузова, кількість місць</td>
                            <td>2-дверне купе, 2</td>
                            <td>2-дверний родстер, 2</td>
                        </tr>
                        <tr>
                            <td class="title-table">Довжина/ширина/висота/колісна база, мм</td>
                            <td>4462/1998/1204/2710</td>
                            <td>4462/1998/1190/2710</td>
                        </tr>
                        <tr>
                            <td class="title-table">Споряджена маса, кг</td>
                            <td>1888</td>
                            <td>1990</td>
                        </tr>
                        <tr>
                            <td class="title-table">Тип двигуна</td>
                            <td>бензиновий, з розподіленим впорскуванням та чотирма турбонагнітачами</td>
                            <td>бензиновий, з розподіленим впорскуванням та чотирма турбонагнітачами</td>
                        </tr>
                        <tr>
                            <td class="title-table">Розташування</td>
                            <td>перед задньою віссю, поздовжньо</td>
                            <td>перед задньою віссю, поздовжньо</td>
                        </tr>
                        <tr>
                            <td class="title-table">Кількість і розташування циліндрів</td>
                            <td>W16</td>
                            <td>W16</td>
                        </tr>
                        <tr>
                            <td class="title-table">Робочий об'єм, куб. см</td>
                            <td>7993</td>
                            <td>7993</td>
                        </tr>
                        <tr>
                            <td class="title-table">Кількість клапанів</td>
                            <td>64</td>
                            <td>64</td>
                        </tr>
                        <tr>
                            <td class="title-table">Максимальна потужність, к. с. (кВт) / об/хв</td>
                            <td>1001 (736) / 6000</td>
                            <td>1200 (882) / 6400</td>
                        </tr>
                        <tr>
                            <td class="title-table">Максимальний крутний момент, Нм / об/хв</td>
                            <td>1250 / 2200-5500</td>
                            <td>1500 / 3000-5000</td>
                        </tr>
                        <tr>
                            <td class="title-table">Коробка передач</td>
                            <td>роботизована, преселективна, 7-ступенева</td>
                            <td>роботизована, преселективна, 7-ступенева</td>
                        </tr>
                        <tr>
                            <td class="title-table">Привід</td>
                            <td>повний, з багатодисковою муфтою у приводі передніх коліс</td>
                            <td>повний, з багатодисковою муфтою у приводі передніх коліс</td>
                        </tr>
                        <tr>
                            <td class="title-table">Максимальна швидкість, км/год</td>
                            <td>407</td>
                            <td>410</td>
                        </tr>
                        <tr>
                            <td class="title-table">Час розгону 0-100/ 200/ 300 км/год, с</td>
                            <td>2,5/7,3/16,7</td>
                            <td>2,6/7,1/16,0</td>
                        </tr>
                        <tr>
                            <td class="title-table">Витрата пального у змішаному циклі, л/100 км</td>
                            <td>24,1</td>
                            <td>23,1</td>
                        </tr>
                        <tr>
                            <td class="title-table">Об'єм паливного бака, л</td>
                            <td colspan="2">100</td>
                        </tr>
                        <tr>
                            <td class="title-table">Тип пального</td>
                            <td colspan="2">бензин АІ-98</td>
                        </tr>
                    </table>`,
                        descriptions: [
                {
                text: "У жовтні 2005 року відбулася знаменна подія в історії автомобільної індустрії – на міжнародному Токійському автосалоні в буквальному сенсі прогриміла прем'єра серійного гіперкара Bugatti Veyron (16.4), який на момент своєї появи став най-най за всіма параметрами: найпотужніший, найшвидший, найдорожчий.",
                images: [
                    "/img/Bugatti/07.jpg",
                    "/img/Bugatti/08.jpg",
                ],
            },
            {
                text: "На міжнародному весняному Женевському автосалоні 2012 року була представлена досить цікава версія Bugatti Veyron, яка отримала назву Grand Sport Vitesse. Її ключовою особливістю є 1200-сильний двигун від моделі Super Sport. Раніше інженерам не вдавалося встановити цей силовий агрегат на кузов з відкритим верхом через складнощі з системою охолодження та установкою повітрозабірників. Але, через деякий час, їм вдалося впоратися з цим завданням. Від закритої моделі, такий автомобіль відрізняється подовженим вітровим склом і знімним дахом з полікарбонату.",
            },
            {
                text: "Зовнішність Bugatti Veyron нікого не залишить байдужим – автомобіль важко назвати еталоном краси, але він миттєво привертає до себе увагу і своїм виглядом справляє незабутнє враження. Широкий і приземкуватий кузов гіперкара, що спирається на широкі катки діаметром 20 дюймів, може похвалитися не лише мускулистою будовою та плавними обрисами, але й аеродинамічно точними формами.",
                images: [
                    "/img/Bugatti/09.jpg",
                    "/img/Bugatti/10.jpg",
                ],
            },
            {
                text: "Виконання Grand Sport Vitesse є піком інженерної думки. Модель має розкішний і неповторний дизайн, що повністю відповідає статусу цієї унікальної машини. Такий автомобіль чудово виглядатиме як на дорогах загального користування, так і на гоночному треку. Салон – це царство розкоші, ексклюзивних матеріалів оздоблення, спортивної ергономіки та безкомпромісного комфорту. Навіть агресивний стиль водіння чи тривала поїздка не зможуть доставити власнику жодних незручностей. Виробник прекрасно розуміє, що душею і серцем подібних машин є їхній двигун. Саме тому родстер оснащується чудовим силовим агрегатом, який є квінтесенцією передових технологій і відмінної майстерності інженерів.",
            },
        ],
        },
    },
    {
        id: 3,
        img: '/img/Lamborghini/main.jpg',
        title: "Lamborghini Huracan LP610-4",
        description: "Спортивний автомобіль з неймовірною динамікою та дизайном.",
        price: [219178],
        additional_info: {
            hero_image:'/img/Lamborghini/bg.jpg',
            images_gallery: [
                    "/img/Lamborghini/01.jpg",
                    "/img/Lamborghini/02.jpg",
                    "/img/Lamborghini/03.jpg",
                    "/img/Lamborghini/04.jpg",
                    "/img/Lamborghini/05.jpg",
                    "/img/Lamborghini/06.jpg",
            ],
            characteristics_table: `
            <table cellspacing="1">
                        <tr class="first-row-table">
                            <th class="red-text-table" width="80%" colspan="2">Основні параметри</th>
                        </tr>
                        <tr>
                            <td class="title-table">Назва комплектації</td>
                            <td>5.2 AMT LP 610-4</td>
                        </tr>
                        <tr>
                            <td class="title-table">Тип приводу/трансмісії</td>
                            <td>Повний (4WD) / РКПП 7</td>
                        </tr>
                        <tr>
                            <td class="title-table">Об'єм двигуна, куб.см</td>
                            <td>5204</td>
                        </tr>
                        <tr>
                            <td class="title-table">Час розгону 0-100 км/год, с</td>
                            <td>3,2</td>
                        </tr>
                        <tr>
                            <td class="title-table">Максимальна швидкість, км/год</td>
                            <td>325</td>
                        </tr>
                        <tr>
                            <td class="title-table">Кліренс, мм</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td class="title-table">Габарити кузова (Д x Ш x В), мм</td>
                            <td>4459 x 1924 x 1165</td>
                        </tr>
                        <tr>
                            <td class="title-table">Гальма (передні/задні)</td>
                            <td>дискові вентильовані</td>
                        </tr>
                        <tr>
                            <td class="title-table">Колісна база, мм</td>
                            <td>2620</td>
                        </tr>
                        <tr>
                            <td class="title-table">Диски/шини</td>
                            <td>Алюмінієві колісні диски/ 245/30 R20;305/30 R20</td>
                        </tr>
                        <tr class="first-row-table">
                            <td class="red-text-table green" width="80%" colspan="2">Вага та об'єми</td>
                        </tr>
                        <tr>
                            <td class="title-table">Маса, кг</td>
                            <td>1422</td>
                        </tr>
                        <tr>
                            <td class="title-table">Об'єм паливного бака, л</td>
                            <td>80</td>
                        </tr>
                        <tr>
                            <td class="title-table">Об'єм багажника, л</td>
                            <td>150</td>
                        </tr>
                        <tr class="first-row-table">
                            <td class="red-text-table green" width="80%" colspan="2">Двигун</td>
                        </tr>
                        <tr>
                            <td class="title-table">Використовуване паливо</td>
                            <td>Бензин АІ-98</td>
                        </tr>
                        <tr>
                            <td class="title-table">Тип двигуна</td>
                            <td>V-подібний, 10-циліндровий</td>
                        </tr>
                        <tr>
                            <td class="title-table">Максимальна потужність, к.с. (кВт) при об./хв.</td>
                            <td>610 (449) / 8250</td>
                        </tr>
                        <tr>
                            <td class="title-table">Максимальний крутний момент, Н*м (кг*м) при об./хв.</td>
                            <td>560 (57) / 6500</td>
                        </tr>
                        <tr>
                            <td class="title-table">Додаткова інформація про двигун</td>
                            <td>розподілене та безпосереднє впорскування палива</td>
                        </tr>
                        <tr>
                            <td class="title-table">Витрата палива у змішаному циклі, л/100 км</td>
                            <td>12,5</td>
                        </tr>
                    </table>    `,
                        descriptions: [
                {
                text: "Lamborghini Huracan був представлений широкій аудиторії 20 грудня 2013 року. Новинка прийшла на зміну моделі Gallardo і, за традицією, отримала ім'я бойового бика. Виробник оснастив її інноваційною технічною начинкою, розширив список оснащення та подарував дизайн у ключі старших моделей. У очі впадають невеликі кутові фари головного освітлення з загостреними кутами та ефектними трикутними секціями світлодіодних ходових вогнів. На вузькому передньому бампері розташований масивний повітрозабірник, закритий чорною пластиковою сіткою з шестикутними комірками.",
                images: [
                    "/img/Lamborghini/07.jpg",
                    "/img/Lamborghini/08.jpg",
                ],
            },
            {
                text: "Він сусідить з великим спліттером і надає передку по-справжньому агресивний зовнішній вигляд. Задня частина автомобіля також виглядає досить вражаюче. У очі впадають світлодіодні Y-подібні стоп-сигнали, хижий дифузор і квартет хромованих патрубків спортивної вихлопної системи. Загалом, зовнішній вигляд моделі виконаний у найкращих традиціях італійських дизайнерів. Модель виглядає стрімко, агресивно та надзвичайно привабливо.",
               },
            {
                text: "Huracan увібрав у себе всі найкращі риси італійської марки. У нього приголомшливий і запам'ятовуваний дизайн, який якнайкраще підкреслить індивідуальність та статус свого власника в суспільстві. Такий автомобіль не розчиниться у сірому буденному потоці та привертатиме до себе погляди в будь-якій ситуації. Салон — це царство ексклюзивних матеріалів оздоблення, спортивної ергономіки та комфорту. Навіть тривала поїздка чи вихідні, проведені на гоночному треку, не зможуть доставити водієві зайвих незручностей.",
                  images: [
                    "/img/Lamborghini/09.jpg",
                    "/img/Lamborghini/10.jpg",
                ],
            },
            {
                text: "Виробник чудово розуміє, що серцем і душею будь-якого спортивного автомобіля є його двигун. Саме тому суперкар оснащений чудовим силовим агрегатом, який є квінтесенцією інноваційних технологій та геніального майстерності італійських інженерів. Lamborghini Huracan — гідний спадкоємець легендарної моделі.",
       },
        ],
        },
    },
    {
        id: 4,
        img: '/img/Land_Rover/main.jpg',
        title: "Land Rover Defender 90",
        description: "Надійний та потужний позашляховик для будь-яких доріг.",
        price: [87671, 123288],
        additional_info: {
            hero_image:'/img/Land_Rover/bg.jpg',
            images_gallery: [
                    "/img/Land_Rover/01.jpg",
                    "/img/Land_Rover/02.jpg",
                    "/img/Land_Rover/03.jpg",
                    "/img/Land_Rover/04.jpg",
                    "/img/Land_Rover/05.jpg",
                    "/img/Land_Rover/06.jpg",
            ],
            characteristics_table: `
            <table cellspacing="1">
                        <tr class="first-row-table">
                            <th class="red-text-table green" width="80%" colspan="2">Двигун</th>
                        </tr>
                        <tr>
                            <td class="title-table">Тип приводу</td>
                            <td>Повний</td>
                        </tr>
                        <tr>
                            <td class="title-table">Марка палива</td>
                            <td>Бензин АІ-95</td>
                        </tr>
                        <tr>
                            <td class="title-table">Об'єм двигуна, куб. см</td>
                            <td>2996</td>
                        </tr>
                        <tr>
                            <td class="title-table">Потужність, к.с.</td>
                            <td>400</td>
                        </tr>
                        <tr>
                            <td class="title-table">Максимальна швидкість, км/год</td>
                            <td>191</td>
                        </tr>
                        <tr>
                            <td class="title-table">Час розгону до 100 км/год, сек</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td class="title-table">Витрата палива (змішаний цикл), л на 100 км</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td class="title-table">Коробка передач</td>
                            <td>АКПП</td>
                        </tr>
                        <tr>
                            <td class="title-table">Кількість ступенів</td>
                            <td>8</td>
                        </tr>
                        <tr class="first-row-table">
                            <th class="red-text-table green" width="80%" colspan="2">Габарити</th>
                        </tr>
                        <tr>
                            <td class="title-table">Довжина, мм</td>
                            <td>4323</td>
                        </tr>
                        <tr>
                            <td class="title-table">Ширина, мм</td>
                            <td>1996</td>
                        </tr>
                        <tr>
                            <td class="title-table">Висота, мм</td>
                            <td>1974</td>
                        </tr>
                        <tr>
                            <td class="title-table">Колісна база, мм</td>
                            <td>2587</td>
                        </tr>
                        <tr>
                            <td class="title-table">Кліренс, мм</td>
                            <td>216</td>
                        </tr>
                        <tr class="first-row-table">
                            <th class="red-text-table green" width="80%" colspan="2">Інше</th>
                        </tr>
                        <tr>
                            <td class="title-table">Гальма (передні/задні)</td>
                            <td>Дискові вентильовані / Дискові</td>
                        </tr>
                        <tr>
                            <td class="title-table">Підвіска (передня/задня)</td>
                            <td>Незалежна, пружинна</td>
                        </tr>
                        <tr>
                            <td class="title-table">Розмір шин</td>
                            <td>255/70 R18</td>
                        </tr>
                        <tr>
                            <td class="title-table">Об'єм багажника, л</td>
                            <td>397</td>
                        </tr>
                        <tr>
                            <td class="title-table">Діаметр розвороту, м</td>
                            <td>11.3</td>
                        </tr>
                    </table>`,
                descriptions: [
                {
                text: "Дебют абсолютно нового Land Rover Defender відбувся на підіумах осіннього міжнародного автомобільного салону у вересні 2019 року. Автомобіль має мало спільного зі своїм рамним попередником, який випускався з 40-х років минулого століття, за винятком деяких іміджевих рис.",
                images: [
                    "/img/Land_Rover/07.jpg",
                    "/img/Land_Rover/08.jpg",
                ],
            },
            {
                text: "На новий Defender 90 встановлюють сучасні функціональні бензинові двигуни з технологією м'якого гібрида MHEV (Mild-Hybrid Electric Vehicle) у версіях потужності P300 і P400, а також новий рядний 6-циліндровий двигун Ingenium у версіях потужності D200, D250 і D300. Вони працюють з восьмиступінчастою автоматичною коробкою передач з плавним перемиканням, яка, разом з постійним повним приводом для бензинових двигунів і інтелектуальним повним приводом для дизельних силових агрегатів, забезпечує новому Defender 90 абсолютну свободу в будь-яких дорожніх умовах. Для роботи в складних бездоріжжях передбачена сучасна система Terrain Response 2. Вона, вперше за всю історію існування бренду, обладнана програмою подолання броду і має першу в світі технологію змінних налаштувань для різних умов бездоріжжя - тепер для подолання будь-яких перешкод досить скористатися сенсорним екраном для вибору необхідних функцій і налаштувань систем авто.",
                },
            {
                text: "Автомобіль експонувався в статичному форматі на тлі осінньої природи та сучасного українського стилю, одночасно підкреслюючи активний, динамічний характер автомобіля і важливість дотримання послідовності, адже рух вперед можливий лише за умови врахування попереднього досвіду і розуміння історії.",
                 images: [
                    "/img/Land_Rover/09.jpg",
                    "/img/Land_Rover/10.jpg",
                ],
            },
            {
                text: "Новий Defender 90 має неперевершену систему продольної геометричної прохідності, адже його довжина менше довжини компактного сімейного хетчбека. Це також забезпечує відмінну маневреність - радіус повороту позашляховика не перевищує 11,3 м",
             },
        ],
        },
    },
    {
        id: 5,
        img: '/img/PORSCHE/main.jpg',
        title: "Porsche 911 Carrera",
        description: "Ікона стилю та продуктивності серед спортивних авто.",
        price: [150685, 191781],
        additional_info: {
            hero_image:'/img/PORSCHE/bg.jpg',
            images_gallery: [
                    "/img/PORSCHE/01.jpg",
                    "/img/PORSCHE/02.jpg",
                    "/img/PORSCHE/03.jpg",
                    "/img/PORSCHE/04.jpg",
                    "/img/PORSCHE/05.jpg",
                    "/img/PORSCHE/06.jpg",
            ],
            characteristics_table: `
            <table cellspacing="1">
                        <tr class="first-row-table">
                            <th class="red-text-table green" width="80%" colspan="2">Двигун внутрішнього згоряння</th>
                        </tr>
                        <tr>
                            <td class="title-table">Об'єм двигуна, куб.см</td>
                            <td>2981</td>
                        </tr>
                        <tr>
                            <td class="title-table">Потужність, к.с./кВт/об.хв</td>
                            <td>370/272/6500</td>
                        </tr>
                        <tr>
                            <td class="title-table">Крутний момент, Нм/об. за хв</td>
                            <td>450/5000</td>
                        </tr>
                        <tr>
                            <td class="title-table">Система подачі палива</td>
                            <td>інжектор, безпосереднє впорскування палива</td>
                        </tr>
                        <tr class="first-row-table">
                            <th class="red-text-table green" width="80%" colspan="2">Трансмісія</th>
                        </tr>
                        <tr>
                            <td class="title-table">Тип приводу</td>
                            <td>задній</td>
                        </tr>
                        <tr>
                            <td class="title-table">Тип КПП</td>
                            <td>механіка 7ст, автомат 7ст</td>
                        </tr>
                        <tr class="first-row-table">
                            <th class="red-text-table green" width="80%" colspan="2">Експлуатаційні показники</th>
                        </tr>
                        <tr>
                            <td class="title-table">Розгін до 100 км/год, с</td>
                            <td>4,4</td>
                        </tr>
                        <tr>
                            <td class="title-table">Максимальна швидкість, км/год</td>
                            <td>295</td>
                        </tr>
                        <tr>
                            <td class="title-table">Витрата л на 100 км (змішаний цикл)</td>
                            <td>8,3</td>
                        </tr>
                        <tr class="first-row-table">
                            <th class="red-text-table green" width="80%" colspan="2">Розміри</th>
                        </tr>
                        <tr>
                            <td class="title-table">Довжина, ширина, висота, мм</td>
                            <td>4499, 1808, 1294</td>
                        </tr>
                        <tr>
                            <td class="title-table">Колісна база, мм</td>
                            <td>2450</td>
                        </tr>
                        <tr>
                            <td class="title-table">Розмір шин</td>
                            <td>235/40 R19; 295/35 R19</td>
                        </tr>
                        <tr>
                            <td class="title-table">Розмір дисків</td>
                            <td>8,5Jx19; 11,5Jx19</td>
                        </tr>
                        <tr>
                            <td class="title-table">Повна маса, кг</td>
                            <td>1875</td>
                        </tr>
                        <tr>
                            <td class="title-table">Об'єм багажника, л</td>
                            <td>145</td>
                        </tr>
                        <tr class="first-row-table">
                            <th class="red-text-table green" width="80%" colspan="2">Інше</th>
                        </tr>
                        <tr>
                            <td class="title-table">Гальма (передні, задні)</td>
                            <td>дискові вентильовані</td>
                        </tr>
                        <tr>
                            <td class="title-table">Підвіска (передня / задня)</td>
                            <td>незалежна McPherson / багаторичажна</td>
                        </tr>
                    </table> `,
                        descriptions: [
                {
                text: "Позачасовий дизайн у сучасній інтерпретації. Унікальний силует 911 характеризується легендарною лінією даху Flyline. Вона практично не змінилася з 1963 року і є головною генетичною ознакою всіх моделей Porsche. У тому числі, звісно, і таких кузовних варіантів 911, як Cabriolet і Targa.",
                 images: [
                    "/img/PORSCHE/07.jpg",
                    "/img/PORSCHE/08.jpg",
                ],
            },
            {
                text: "Численні системи допомоги водію, як, наприклад, система контролю смуг руху з функцією розпізнавання дорожніх знаків, система нічного бачення або режим Porsche WET, підтримують Вас під час руху.",
                 },
            {
                text: "Дисплеї з високою роздільною здатністю, сенсорні кнопки. Одним словом, ергономіка спортивного автомобіля з мережевими технологіями XXI століття. Інтуїтивно зрозуміла концепція керування і індикації Porsche Advanced Cockpit дозволяє надати салону акуратний і динамічний вигляд.",
                  images: [
                    "/img/PORSCHE/09.jpg",
                    "/img/PORSCHE/10.jpg",
                ],
            },
            {
                text: "Porsche Connect розширює функціональні можливості автомобіля такими додатковими додатками та послугами, як інформація про дорожній рух у режимі реального часу, онлайн-система голосового управління, стримінгові сервіси – 911 дозволяє повною мірою використовувати можливості мережевої інтеграції.",
                },
        ],
        },
    },
    {
        id: 6,
        img: '/img/Tesla/main.jpg',
        title: "Tesla Model X P100D",
        description: "Електричний кросовер з футуристичним дизайном та високими технологіями.",
        price: [104110, 142466],
        additional_info: {
            hero_image:'/img/Tesla/bg.jpg',
            images_gallery: [
                    "/img/Tesla/01.jpg",
                    "/img/Tesla/02.jpg",
                    "/img/Tesla/03.jpg",
                    "/img/Tesla/04.jpg",
                    "/img/Tesla/05.jpg",
                    "/img/Tesla/06.jpg",
            ],
            characteristics_table: `
            <table cellspacing="1">
                        <tr class="first-row-table">
                            <th class="red-text-table green" width="80%" colspan="2">Основні параметри</th>
                        </tr>
                        <tr>
                            <td class="title-table">Тип приводу / трансмісії</td>
                            <td>Повний (4WD) / Редуктор</td>
                        </tr>
                        <tr>
                            <td class="title-table">Гальма (передні, задні)</td>
                            <td>дискові вентильовані</td>
                        </tr>
                        <tr>
                            <td class="title-table">Час розгону 0-100 км/год, с</td>
                            <td>2,8</td>
                        </tr>
                        <tr>
                            <td class="title-table">Максимальна швидкість, км/год</td>
                            <td>250</td>
                        </tr>
                        <tr>
                            <td class="title-table">Кліренс, мм</td>
                            <td>175</td>
                        </tr>
                        <tr>
                            <td class="title-table">Диски</td>
                            <td>Алюмінієві колісні диски</td>
                        </tr>
                        <tr>
                            <td class="title-table">Шини</td>
                            <td>275/45 R20; 275/45 R20</td>
                        </tr>
                        <tr class="first-row-table">
                            <th class="red-text-table green" width="80%" colspan="2">Розміри ходової частини</th>
                        </tr>
                        <tr>
                            <td class="title-table">Колісна база, мм</td>
                            <td>3061</td>
                        </tr>
                        <tr>
                            <td class="title-table">Мінімальний радіус розвороту, м</td>
                            <td>6,2</td>
                        </tr>
                        <tr>
                            <td class="title-table">Довжина, ширина, висота, мм</td>
                            <td>5029, 2271, 1684</td>
                        </tr>
                        <tr class="first-row-table">
                            <th class="red-text-table green" width="80%" colspan="2">Вага та допустимі навантаження</th>
                        </tr>
                        <tr>
                            <td class="title-table">Маса, кг</td>
                            <td>2509</td>
                        </tr>
                        <tr>
                            <td class="title-table">Допустима повна маса, кг</td>
                            <td>3140</td>
                        </tr>
                        <tr>
                            <td class="title-table">Максимальна вантажопідйомність</td>
                            <td>631</td>
                        </tr>
                        <tr class="first-row-table">
                            <th class="red-text-table green" width="80%" colspan="2">Двигун</th>
                        </tr>
                        <tr>
                            <td class="title-table">Використовуване паливо</td>
                            <td>Електрика</td>
                        </tr>
                        <tr>
                            <td class="title-table">Тип двигуна</td>
                            <td>електродвигун</td>
                        </tr>
                        <tr>
                            <td class="title-table">Додаткова інформація про двигун</td>
                            <td>два трифазних асинхронних електродвигуна</td>
                        </tr>
                        <tr>
                            <td class="title-table">Потужність, кВт</td>
                            <td>568</td>
                        </tr>
                        <tr>
                            <td class="title-table">Запас ходу на електротязі, км</td>
                            <td>491</td>
                        </tr>
                    </table>`,
                        descriptions: [
                {
                text: "Попри всю потужність, Tesla Model X P100D залишається серійним електричним кросовером, зберігши все найкраще від менш «стремительных» версій. Це повноцінний 7-місний SUV, з просторим салоном, комфортною посадкою пасажирів, містким багажником. Спокійна їзда на ньому приносить тільки позитивні емоції. Він дуже зручний, ергономічна підвіска, налаштована на режим комфортної їзди буквально, поглинає всі нерівності дороги. Але якщо натиснути на педаль акселератора, будьте готові до вибуху емоцій. Автомобіль в прямому сенсі зривається з місця, миттєво набираючи швидкість. Подібна жвавість електромобіля — справжній виклик для водіїв, які цінують драйв на високих швидкостях.",
              images: [
                    "/img/Tesla/07.jpg",
                    "/img/Tesla/08.jpg",
                ],
            },
            {
                text: "Головна дизайнерська «фішка» кросовера — задні бокові двері «крило сокола». Дуже незвичайний та цікавий спосіб відкриття дверей, але при цьому зручний і простий. Багато хто скаржився на непрактичність такого підходу, але специфіка в тому, що двері не відкриваються на весь розмах (як це робилося в популярних раніше автомобілях), а спочатку піднімаються до певної висоти і лише потім «розправляють крила». Таким чином, достатньо простору в 30 см від поруч стоячого автомобіля, щоб забезпечити відкриття дверей та посадку/висадку з автомобіля.",
              },
            {
                text: "Ще одна особливість моделі — автопілот. Революційна система, яка дійсно самостійно керує автомобілем. У цьому їй допомагає комплект з кількох камер, система навігації з постійним оновленням, радари, сенсорні датчики.",
                 images: [
                    "/img/Tesla/09.jpg",
                    "/img/Tesla/10.jpg",
                ],
            },
            {
                text: "Кросовер Tesla Model X P100D — безпечний автомобіль. Тут присутній повний комплект усіх активних систем безпеки, включаючи режим екстреного гальмування та пакет з 12 подушок безпеки. Єдине, що робить електромобіль небезпечним — потужність, впоратися з якою можуть лише досвідчені водії.",
                },
        ],
        },
    }
];
