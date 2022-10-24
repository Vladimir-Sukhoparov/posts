import { config } from "./config";

const onResponce = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка : ${res.status}`);
};

class Api {
  constructor({ url }) {
    this._url = url;
  }

  getPosts() {
    const requestUrl = `${this._url}/posts?_limit=6`;

    return fetch(requestUrl).then(onResponce);
  }

  getPhotos() {
    const requestUrl = `${this._url}/photos?_limit=6`;

    return fetch(requestUrl).then(onResponce);
  }
}

export default new Api(config);
