const baseApiUrl = 'http://127.0.0.1:8000/api/v1';

const loginErrors = {
    'invalidEmail': 'Невірний email',
    'InvalidPassword': 'Невірний пароль',
    'blockedUser': 'Ваш аккаунт заблоковано',
    'unhandledError': 'Виникла помилка, на сервері, спробуйте ще раз'
};

export default {
    baseApiUrl,
    loginErrors
}