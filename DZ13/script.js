document.addEventListener('DOMContentLoaded', function () {



    const getData = async (url) => {
        try {
            const res = await fetch(url);
            const usersJson = await res.json();
            if (!res.ok) {
                throw new Error('Server does not answer');
            }
            return usersJson;
        } catch (error) {
            console.log(error.message);
        }
    };

    const postData = async (url) => {
        try {
            delete createNewUser.password;
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(createNewUser),
            });
            const resJSON = await res.json();
            if (!res.ok) {
                throw new Error('Сервер не отвечает');
            }
            return resJSON;
        } catch (error) {
            console.log(error.message);
        }
    };

    let loginUserInfo = {
        login: '',
        password: '',
    };

    let createNewUser = {
        login: '',
        password: '',
        repeatPassword: '',
    };

    document.getElementById('sign-in').onclick = async function () {


        updataInfo();

        try {
            const users = await getData('http://localhost:3000/users');
            let loginToCheck = loginUserInfo.login;
            let loginCheck = users.find((user) => user.login === loginToCheck);
            if (loginCheck) {
                console.log('user found', loginCheck);
                let passwordToCheck = loginUserInfo.password;
                let passwordCheck = users.find((user) => user.password === passwordToCheck);
                if (passwordCheck) {
                    console.log('Пароль подходит');
                    document.querySelector('.section.active').classList.remove('active');
                    document.querySelector('.congratulations').classList.add('active');
                }
            } else {
                console.log('Ошибка авторизации');
            }
        } catch (error) {
            console.error(error.message);
        }
    };


    document.getElementById('sign-up').onclick = async function () {

        updataInfoForSignUp();

        try {
            const users = await getData('http://localhost:3000/users');
            const loginToCheck = createNewUser.login;
            const loginCheck = users.find((user) => user.login === loginToCheck);
            if (loginCheck) {
                console.log('Пользователь с таким логином найден', loginCheck);
            } else {
                const users1 = await postData('http://localhost:3000/users');
                console.log('Пользователь ' + createNewUser.login + ' добавлен');
            }
        } catch (error) {
            console.error(error.message);
        }
    };





    function updataInfo() {
        loginUserInfo.login = document.getElementById('login').value;
        loginUserInfo.password = document.getElementById('password').value;
        console.log(loginUserInfo);
        console.log(createNewUser);
    }

    function updataInfoForSignUp() {
        createNewUser.login = document.getElementById('new-login').value;
        createNewUser.password = document.getElementById('new-password').value;
        createNewUser.repeatPassword = document.getElementById('new-repeatPassword').value;
    }


});