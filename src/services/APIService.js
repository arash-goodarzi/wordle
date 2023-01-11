const header = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const joinURL = (baseURL, url) => {
  return `${baseURL}/${url}`;
};

class APIService {
  constructor() {
    this.domain = "https://random-word-api.herokuapp.com/all";
  }

  require(url, method = "POST", data = null) {
    url = joinURL(this.domain, url);
    const options = {
      header,
      method,
    };
    if (data) {
      options.body = JSON.stringify({ ...data });
    }

    return fetch(url, options).then((res) => res.json());
  }

  get(url, id) {
    const method = "GET";
    if (id) {
      url = `${url}/${id}`;
    }

    return this.require(url, method);
  }
}

export default APIService;
