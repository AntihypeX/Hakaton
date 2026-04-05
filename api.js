const API_BASE_URL = typeof window !== 'undefined' ? getApiBaseUrl() : '';

const API_ROUTES = {
    auth: {
        login: '/auth/login.php',
        me: '/auth/me.php',
        logout: '/auth/logout.php',
        register: '/auth/register.php',
    },
    forms: {
        register: '/register_forms.php',
    },
    ai: {
        gigachat: '/ai/gigachat.php',
    },
};

async function request(path, options = {}) {
    let response;

    try {
        response = await fetch(`${API_BASE_URL}${path}`, {
            method: options.method || 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...options.headers,
            },
            credentials: 'include',
            body: options.body ? JSON.stringify(options.body) : undefined,
        });
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        throw new Error(`Не удалось подключиться к API: ${API_BASE_URL}${path}`);
    }

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        const error = new Error(data.message || 'Ошибка API.');
        error.status = response.status;
        throw error;
    }

    return data;
}

function toTrimmedString(value) {
    if (value === null || value === undefined) {
        return '';
    }

    return String(value).trim();
}

function normalizeRegisterPayload(...args) {
    const source = args.length === 1 && typeof args[0] === 'object' && args[0] !== null
        ? args[0]
        : {
            login: args[0],
            password: args[1],
            password2: args[2],
        };

    const login = toTrimmedString(source.login ?? source.username);
    const password = String(source.password ?? '');
    const password2 = String(
        source.password2
        ?? source.repPassword
        ?? source.confirmPassword
        ?? ''
    );

    if (!login) {
        throw new Error('Укажите логин.');
    }

    if (!password) {
        throw new Error('Укажите пароль.');
    }

    if (!password2) {
        throw new Error('Повторите пароль.');
    }

    return {
        login,
        password,
        password2,
    };
}

function normalizeLoginPayload(...args) {
    const source = args.length === 1 && typeof args[0] === 'object' && args[0] !== null
        ? args[0]
        : {
            login: args[0],
            password: args[1],
        };

    const login = toTrimmedString(source.login ?? source.username);
    const password = String(source.password ?? '');

    if (!login) {
        throw new Error('Укажите логин.');
    }

    if (!password) {
        throw new Error('Укажите пароль.');
    }

    return {
        login,
        password,
    };
}

function getApiBaseUrl() {
    const { origin, hostname, pathname } = window.location;

    if (hostname === 'front.localhost') {
        return 'http://api.localhost/api';
    }

    if (hostname === 'localhost' && pathname.includes('/hakaton/')) {
        return `${origin}/hakaton/BackEnd/api`;
    }

    return `${origin}/api`;
}

const api = {
    login(...args) {
        const payload = normalizeLoginPayload(...args);

        return request(API_ROUTES.auth.login, {
            method: 'POST',
            body: payload,
        });
    },

    me() {
        return request(API_ROUTES.auth.me);
    },

    logout() {
        return request(API_ROUTES.auth.logout, {
            method: 'POST',
        });
    },

    register(...args) {
        const payload = normalizeRegisterPayload(...args);

        return request(API_ROUTES.auth.register, {
            method: 'POST',
            body: payload,
        });
    },

    registerForm(message) {
        return request(API_ROUTES.forms.register, {
            method: 'POST',
            body: { message },
        });
    },

    askGigaChat(message, systemPrompt = '', model = '') {
        return request(API_ROUTES.ai.gigachat, {
            method: 'POST',
            body: { message, systemPrompt, model },
        });
    },
};

function showMessage(element, message = '') {
    if (!element) {
        return;
    }

    element.hidden = message === '';
    element.textContent = message;
}

function initLoginPage() {
    const form = document.querySelector('[data-login-form]');

    if (!form) {
        return;
    }

    const error = document.querySelector('[data-login-error]');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        showMessage(error);

        const formData = new FormData(form);
        const username = String(formData.get('username') || '').trim();
        const password = String(formData.get('password') || '');

        if (!username || !password) {
            showMessage(error, 'Заполните логин и пароль.');
            return;
        }

        submitButton.disabled = true;

        try {
            await api.login(username, password);
            window.location.href = 'profile.html';
        } catch (requestError) {
            showMessage(error, requestError.message);
        } finally {
            submitButton.disabled = false;
        }
    });
}

function initAiPage() {
    const form = document.querySelector('[data-ai-form]');

    if (!form) {
        return;
    }

    const error = document.querySelector('[data-ai-error]');
    const loading = document.querySelector('[data-ai-loading]');
    const response = document.querySelector('[data-ai-response]');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        showMessage(error);
        response.hidden = true;
        response.textContent = '';
        loading.hidden = false;
        submitButton.disabled = true;

        const formData = new FormData(form);
        const message = String(formData.get('message') || '').trim();

        if (!message) {
            loading.hidden = true;
            submitButton.disabled = false;
            showMessage(error, 'Введите сообщение для ИИ.');
            return;
        }

        try {
            const data = await api.askGigaChat(message);
            loading.hidden = true;
            response.hidden = false;
            response.textContent = data.reply || 'ИИ не вернул ответ.';
        } catch (requestError) {
            loading.hidden = true;
            showMessage(error, requestError.message);
        } finally {
            submitButton.disabled = false;
        }
    });
}

function initReviewFormPage() {
    const form = document.querySelector('[data-review-form]');

    if (!form) {
        return;
    }

    const status = document.querySelector('[data-review-status]');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        showMessage(status);

        const formData = new FormData(form);
        const message = String(formData.get('message') || '').trim();

        if (!message) {
            showMessage(status, 'Введите сообщение.');
            return;
        }

        submitButton.disabled = true;
        showMessage(status, 'Отправка...');

        try {
            const data = await api.registerForm(message);
            showMessage(status, data.message || 'Сообщение отправлено.');
            form.reset();
        } catch (requestError) {
            showMessage(status, requestError.message);
        } finally {
            submitButton.disabled = false;
        }
    });
}

async function initProfilePage() {
    const profile = document.querySelector('[data-profile-root]');

    if (!profile) {
        return;
    }

    const loading = document.querySelector('[data-profile-loading]');
    const error = document.querySelector('[data-profile-error]');
    const username = document.querySelector('[data-profile-username]');
    const loginTimeRow = document.querySelector('[data-profile-login-time]');
    const loginTime = document.querySelector('[data-profile-login-time-value]');
    const logoutButton = document.querySelector('[data-logout-button]');

    try {
        const data = await api.me();

        profile.hidden = false;
        loading.hidden = true;
        username.textContent = data.user.username;

        if (data.user.login_time) {
            loginTimeRow.hidden = false;
            loginTime.textContent = data.user.login_time;
        }
    } catch (requestError) {
        if (requestError.status === 401) {
            window.location.href = 'index.html';
            return;
        }

        loading.hidden = true;
        showMessage(error, requestError.message);
        return;
    }

    logoutButton.addEventListener('click', async () => {
        logoutButton.disabled = true;
        showMessage(error);

        try {
            await api.logout();
            window.location.href = 'index.html';
        } catch (requestError) {
            logoutButton.disabled = false;
            showMessage(error, requestError.message);
        }
    });
}

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        initLoginPage();
        initAiPage();
        initReviewFormPage();
        initProfilePage();
    });
}

if (typeof window !== 'undefined') {
    window.api = api;
}
