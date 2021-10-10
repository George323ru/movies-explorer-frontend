export const BASE_URL = 'http://api.gusevgeorgiy.me.nomoredomains.club';

const checkRes = (res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)

export async function register(name, email, password) {

  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(checkRes)
    .catch(err => console.log(err))
};

export const authorize = (email, password) => {

  return fetch(`${BASE_URL}/sign-in`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ password, email })
  })
    .then(checkRes)
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    credentials: 'include',
  })
    .then(checkRes)
}