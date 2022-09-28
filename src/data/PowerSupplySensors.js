export const columns = [
    {name: '№', selector: "id"},
    {name: 'Наименование', selector: "title"},
    {name: 'Нижний порог', selector: "lower"},
    {name: 'Текущее значение', selector: "current"},
    {name: 'Верхний порог', selector: "upper"},
    {name: 'Гист.', selector: "hist"},
    {name: 'Статус', selector: "status"}];

export const data = [
    {
        id: 1,
        title: 'Частота сети',
        lower: 0,
        current: 49,
        upper: 0,
        hist: 1,
        status: 1
    },
    {
        id: 1,
        title: 'Напряжение фазы',
        lower: 0,
        current: 49,
        upper: 0,
        hist: 1,
        status: 1
    },
]
