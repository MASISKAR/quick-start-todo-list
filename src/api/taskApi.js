const taskApiUrl = process.env.REACT_APP_API_URL + "/task";

export default class TaskApi {
  #request(method, body = null){
    const params = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if(body !== null){
      params.body = JSON.stringify(body);
    }
    return fetch(taskApiUrl, params)
    .then((result) => result.json())
    .then((data) => {
      if(data.error){
        throw data.error;
      }
      return data;
    });
  }

  getAll() {
      return this.#request("GET");

    // return fetch(taskApiUrl, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then((result) => result.json());
  }
  add(task) {
    return this.#request("POST", task);

    // return fetch(taskApiUrl, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(task),
    // }).then((result) => result.json());
  }

  update() {}
  delete() {}
}
