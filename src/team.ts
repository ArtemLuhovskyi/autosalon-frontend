export interface ITeam {
    id: number;
    img: string;
    title: string;
    decription: string;
}

export const dataTeam: ITeam[] = [
    {
        id: 1,
        img: '/img/01.png',
        title: "Артем Луговський",
        decription: "Керівник фірми"
    },
    {
        id: 2,
        img: '/img/02.png',
        title: "Марія Михайлівна",
        decription: "Менеджер"
    },
    {
        id: 3,
        img: '/img/03.png',
        title: "Вікторія Вікторівна",
        decription: "Менеджер"
    },
    {
        id: 4,
        img: '/img/04.png',
        title: "Вадим Вадимович",
        decription: "Фахівець із запчастин"
    },
    
];
