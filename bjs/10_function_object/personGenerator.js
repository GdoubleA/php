const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ирина",
            "id_2": "Оксана",
            "id_3": "Маргарита",
            "id_4": "Вероника",
            "id_5": "Антонина",
            "id_6": "Юлия",
            "id_7": "Татьяна",
            "id_8": "Марина",
            "id_9": "Светлана",
            "id_10": "Анастасия"
        }
    }`,
    middleNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Максимович",
            "id_2": "Александрович",
            "id_3": "Евгеньевич",
            "id_4": "Олегович",
            "id_5": "Викторович",
            "id_6": "Сергеевич",
            "id_7": "Петрович",
            "id_8": "Валерьевич",
            "id_9": "Иванович",
            "id_10": "Владимирович"
        }
    }`,
    middleNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александровна",
            "id_2": "Борисовна",
            "id_3": "Владимировна",
            "id_4": "Николаевна",
            "id_5": "Юрьевна",
            "id_6": "Вячеславовна",
            "id_7": "Сергеевна",
            "id_8": "Васильевна",
            "id_9": "Викторовна",
            "id_10": "Павловна"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "сантехник",
            "id_2": "шахтер",
            "id_3": "водитель",
            "id_4": "программист",
            "id_5": "военный",
            "id_6": "пожарный",
            "id_7": "лесоруб",
            "id_8": "строитель",
            "id_9": "ученый",
            "id_10": "охранник"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "бухгалтер",
            "id_2": "стюардесса",
            "id_3": "стилист",
            "id_4": "маркетолог",
            "id_5": "фитнес-тренер",
            "id_6": "педагог",
            "id_7": "врач",
            "id_8": "дизайнер",
            "id_9": "повар",
            "id_10": "программист"
        }
    }`,
    dateBirthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,


    GENDER_MALE: 'Мужчина,',
    GENDER_FEMALE: 'Женщина,',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomGender: function() {
        return this.randomIntNumber() > 0 ? this.GENDER_MALE : this.GENDER_FEMALE; //  sex generator
    },

    // randomBirthYear: function() {
    //     return `${this.randomIntNumber(2020, 1965)} года рождения`; //  date of birth generator
    // },

    randomBirthYear: function () {
        let monthNumber = this.randomIntNumber(12, 1); // Создание переменной и рандомный выбор месяца для вызова функции randomValue ниже (передается в нее как аргумент) и также это поможет в  дальнейшем определении четных и нечетных месяцев
        let monthValue = this.randomValue(this.dateBirthJson, 1, 0, 0, monthNumber); // Вывод выбранного месяца в текстовом варианте
        let dayBirth = (monthNumber === 2) ? this.randomIntNumber(28, 1) : (monthNumber === 4 || monthNumber  === 6 || monthNumber === 9 || monthNumber === 11) ? this.randomIntNumber(30, 1) : this.randomIntNumber(31, 1); // Вывод дня в зависимости от месяца
        let yearBirth = this.randomIntNumber(2000, 1960); // Вывод года рождения
        let outputFullDate = `${dayBirth} ${monthValue} ${yearBirth} года рождения`; // Вывод полной даты в формате (день,месяц,год)
        return outputFullDate;
    },

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender == 'Мужчина,') {
            return this.randomValue(this.firstNameMaleJson);    // name generator
        } else {
            return this.randomValue(this.firstNameFemaleJson)
        }
    },


     randomSurname: function() {
        if (this.person.gender == 'Мужчина,') {
            return this.randomValue(this.surnameJson);          // surname generator
        } else {
            return `${this.randomValue(this.surnameJson)}a`
        }
    },

    randomMiddleName: function() {
        if (this.person.gender == 'Мужчина,') {
            return this.randomValue(this.middleNameMaleJson);
        } else {                                                //  middlename generator
            return this.randomValue(this.middleNameFemaleJson);
        }
    },

    randomProf: function() {
        if (this.person.gender == 'Мужчина,') {
            return `по профессии: ${this.randomValue(this.professionMaleJson)}`;
        } else {                                                //  profession generator
            return `по профессии: ${this.randomValue(this.professionFemaleJson)}`;
        }
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.birthYear = this.randomBirthYear();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.middleName = this.randomMiddleName();
        this.person.prof = this.randomProf();
        return this.person;
    }
};

