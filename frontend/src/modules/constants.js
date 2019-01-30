const baseApiUrl = 'http://127.0.0.1:8000/api/v1';

const loginErrors = {
    'invalidEmail': 'Невірний email',
    'InvalidPassword': 'Невірний пароль',
    'emptyData': 'Відсутні дані',
    'blockedUser': 'Ваш аккаунт заблоковано',
    'serverError': 'Виникла помилка, на сервері, спробуйте ще раз',
    'invalidData': 'Даного облікового запису не існує'
};


const loginActions = {
    'checkToken': 'CHECK_TOKEN',
    'login': 'LOGIN',
    'logout': "LOGOUT",
    'loginError': 'LOGIN_ERROR'
};


const planingTabsNames = [
    {
        name: 'Планування на день',
        url: 'planing/day'
    },
    {
        name: 'Планування на тиждень',
        url: 'planing/week'
    },
    {
        name: 'Планування на місяць',
        url: 'planing/month'
    },
    {
        name: 'Планування на рік',
        url: 'planing/year'
    },
    {
        name: 'Проектне планування',
        url: 'planing/project'
    },





];

const utilityTabs = [
    {
        name: 'Налаштування',
        url: '/settings'
    }
];


export default {
    baseApiUrl,
    loginActions,
    loginErrors,
    planingTabsNames,
    utilityTabs
}