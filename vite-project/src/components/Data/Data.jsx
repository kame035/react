export const products = [
    { 
        id: 1, 
        auth: 'Дэниел Мейсон', 
        name: 'Северный лес',
        image: '/img/item1.png',
        description: '«Северный лес» - это роман, который погружает читателя в бурные двадцатые годы, полные вечеринок, секретов и личных амбиций. Главный герой, Джей Гэтсби, является жертвой бессмысленной погони за мечтой об истинной любви.',
        read: 150,
        age: '12',
        publish: 'Издательство АС',
        rev: 5,
        genre: 'роман',
        reviews: [
            { 
                user: { name: 'Анна Иванова', avatar: '../../src/assets/home/avatar.png' },
                date: '2024-01-10', 
                rating: 5, 
                comment: 'Замечательная книга, рекомендую всем!' 
            },
            { 
                user: { name: 'Иван Петров', avatar: '../../src/assets/home/avatar.png' },
                date: '2024-02-05', 
                rating: 4, 
                comment: 'Интересно, но затянуто местами.' 
            },
        ],
        discussion: [
            {
                question: 'Как вам главная идея книги?',
                user: {
                    name: 'Мария Соколова',
                    avatar: '../../src/assets/home/avatar.png',
                    date: '2024-02-01',
                },
                answers: [
                    { user: 'Елена', answer: 'Считаю, что идея очень актуальна для нашего времени.', avatar: '../../src/assets/home/avatar.png' },
                    { user: 'Алексей', answer: 'Главная идея заставляет задуматься, но подача могла быть лучше.', avatar: '../../src/assets/home/avatar.png' },
                ]
            },
        ]
    },
    { 
        id: 2, 
        auth: 'Фрэнсис Скотт Фицджеральд', 
        name: 'Великий Гэтсби',
        image: '/img/item.png',
        description: '«Великий Гэтсби» - это история о безумных двадцатых, о богатстве, любви и предательстве. Джей Гэтсби, главный герой, жаждет любви своей жизни, Дейзи Бьюкенен, и готов пойти на всё ради её внимания.',
        read: 150,
        age: '12',
        publish: 'Издательство АС',
        rev: 5,
        genre: 'роман',
        reviews: [
            { 
                user: { name: 'Александр Смирнов', avatar: '../../src/assets/home/avatar.png' },
                date: '2024-01-12', 
                rating: 5, 
                comment: 'Очень удивлена (положительно) буквальному соответствию фильма и книги, при чтении всплывали картинки шикарных вечеринок из фильма.' 
            },
            { 
                user: { name: 'Наталья Сергеева', avatar: '../../src/assets/home/avatar.png' },
                date: '2024-02-03', 
                rating: 3, 
                comment: 'Хорошо, но не так увлекательно, как ожидалось.' 
            },
        ],
        discussion: [
            {
                question: 'Почему Фицджеральд назвал Гэтсби «великим»?',
                user: {
                    name: 'Ирина Карпова',
                    avatar: '../../src/assets/home/avatar.png',
                    date: '2024-02-05',
                },
                answers: [
                    { user: 'Сергей', answer: 'Он считал, что деньги дадут ему свободу и любовь.', avatar: '../../src/assets/home/avatar.png' },
                    { user: 'Ольга', answer: 'Это было его способом преодолеть прошлое и стать успешным.', avatar: '../../src/assets/home/avatar.png' },
                ]
            },
            {
                question: 'Как вы относитесь к сюжетным поворотам в книге?',
                user: {
                    name: 'Ирина Карпова',
                    avatar: '../../src/assets/home/avatar.png',
                    date: '2024-02-06',
                },
                answers: [
                    { user: 'Марина', answer: 'Некоторые моменты были предсказуемыми, но всё равно держат в напряжении.', avatar: '../../src/assets/home/avatar.png' },
                    { user: 'Дмитрий', answer: 'Повороты сюжета делают историю уникальной и запоминающейся.', avatar: '../../src/assets/home/avatar.png' },
                ]
            }
        ]
    },
    { 
        id: 3, 
        auth: 'Дэниел Мейсон', 
        name: 'Неудобные разговоры',
        image: '/img/item3.png',
        description: '«Неудобные разговоры» - это книга, которая освещает трудные темы и заставляет читателей пересмотреть свои убеждения и привычки. Это история о борьбе, любви и самопознании.',
        read: 150,
        age: '12',
        publish: 'Издательство АС',
        rev: 5,
        genre: 'детектив',
        reviews: [
            { 
                user: { name: 'Кирилл Коваленко', avatar: '../../src/assets/home/avatar.png' },
                date: '2024-03-15', 
                rating: 4, 
                comment: 'Нестандартная книга, заставляет задуматься.' 
            },
            { 
                user: { name: 'Лиза Алексеевна', avatar: '../../src/assets/home/avatar.png' },
                date: '2024-03-18', 
                rating: 3, 
                comment: 'Местами тяжело читать, но сюжет интересный.' 
            },
        ],
        discussion: [
            {
                question: 'Как вы понимаете финал книги?',
                user: {
                    name: 'Антон Смирнов',
                    avatar: '../../src/assets/home/avatar.png',
                    date: '2024-03-20',
                },
                answers: [
                    { user: 'Ольга', answer: 'Финал заставил меня пересмотреть все, что я прочитала.', avatar: '../../src/assets/home/avatar.png' },
                    { user: 'Игорь', answer: 'Концовка неожиданная, но логичная.', avatar: '../../src/assets/home/avatar.png' },
                ]
            }
        ]
    },
    { 
        id: 4, 
        auth: 'Фредрик Бакман', 
        name: 'Тревожные люди',
        image: '/img/item4.png',
        description: '«Тревожные люди» - это роман, который сочетает в себе элементы драмы и комедии, рассказывая о жизни и проблемах людей в нашем обществе. Книга призывает к пониманию и сопереживанию.',
        read: 150,
        age: '12',
        publish: 'Издательство АС',
        rev: 5,
        genre: 'роман',
        reviews: [
            { 
                user: { name: 'Виктор Петров', avatar: '../../src/assets/home/avatar.png' },
                date: '2024-04-01', 
                rating: 5, 
                comment: 'Вдохновляющая история о человеческих отношениях.' 
            },
            { 
                user: { name: 'Мария Степанова', avatar: '../../src/assets/home/avatar.png' },
                date: '2024-04-05', 
                rating: 4, 
                comment: 'Очень трогательно, но с грустным оттенком.' 
            },
        ],
        discussion: [
            {
                question: 'Какие моменты вам запомнились больше всего?',
                user: {
                    name: 'Алексей Федоров',
                    avatar: '../../src/assets/home/avatar.png',
                    date: '2024-04-10',
                },
                answers: [
                    { user: 'Анна', answer: 'Сцена встречи главных героев была особенно трогательной.', avatar: '../../src/assets/home/avatar.png' },
                    { user: 'Максим', answer: 'Запомнился финал, он оставляет много вопросов.', avatar: '../../src/assets/home/avatar.png' },
                ]
            }
        ]
    },
    { 
        id: 5, 
        auth: 'Деймон Захариадис', 
        name: 'Нет значит нет',
        image: '/img/item5.png',
        description: '«Нет значит нет» - это важная книга, которая поднимает вопросы согласия и личных границ. Книга побуждает читателей задуматься о своих действиях и их последствиях.',
        read: 150,
        age: '12',
        publish: 'Издательство АС',
        rev: 5,
        genre: 'роман',
        reviews: [
            { 
                user: { name: 'Светлана Громова', avatar: '../../src/assets/home/avatar.png' },
                date: '2024-04-20', 
                rating: 5, 
                comment: 'Очень полезная и мотивирующая книга!' 
            },

            { 
                user: { name: 'Мария Степанова', avatar: '/img/avatar8.png' },
                date: '2024-04-05', 
                rating: 4, 
                comment: 'Очень трогательно, но с грустным оттенком.' 
            },
        ],
        discussion: [
            {
                question: 'Какие моменты вам запомнились больше всего?',
                user: {
                    name: 'Алексей Федоров',
                    avatar: '../../src/assets/home/avatar.png',
                    date: '2024-04-10',
                },
                answers: [
                    { user: 'Анна', answer: 'Сцена встречи главных героев была особенно трогательной.', avatar: '../../src/assets/home/avatar.png' },
                    { user: 'Максим', answer: 'Запомнился финал, он оставляет много вопросов.', avatar: '../../src/assets/home/avatar.png' },
                ]
            }
        ]
    },
    { 
        id: 6, 
        auth: 'Михаил Булгаков', 
        name: 'Мастер и Маргарита',
        image: '/img/item6.png',
        description: '«Мастер и Маргарита» - это роман, который смешивает реальность и фантазию, затрагивая темы любви, предательства и искупления. Это шедевр, который оставляет глубокое впечатление на каждого читателя.',
        read: 150,
        age: '12',
        publish: 'Издательство АС',
        rev: 5,
        genre: 'роман',
        reviews: [
            { 
                user: { name: 'Светлана Громова', avatar: '../../src/assets/home/avatar.png' },
                date: '2024-04-20', 
                rating: 5, 
                comment: 'Очень полезная и мотивирующая книга!' 
            },

            { 
                user: { name: 'Мария Степанова', avatar: '/img/avatar8.png' },
                date: '2024-04-05', 
                rating: 4, 
                comment: 'Очень трогательно, но с грустным оттенком.' 
            },
        ],
        discussion: [
            {
                question: 'Какие моменты вам запомнились больше всего?',
                user: {
                    name: 'Алексей Федоров',
                    avatar: '../../src/assets/home/avatar.png',
                    date: '2024-04-10',
                },
                answers: [
                    { user: 'Анна', answer: 'Сцена встречи главных героев была особенно трогательной.', avatar: '../../src/assets/home/avatar.png' },
                    { user: 'Максим', answer: 'Запомнился финал, он оставляет много вопросов.', avatar: '../../src/assets/home/avatar.png' },
                    { user: 'Лена', answer: 'Сцена встречи главных героев была особенно трогательной.', avatar: '../../src/assets/home/avatar.png' },
                ]
            }
        ]
    },
    
];
