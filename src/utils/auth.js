export const BASE_URL = 'https://api.gusevgeorgiy.me.nomoredomains.club';

const checkRes = (res) =>
  res.ok
    ? res.json()
    : Promise.reject(`Ошибка: ${res.status}`)

export function register(name, email, password) {

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

  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },

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
  })
    .then(checkRes)
}