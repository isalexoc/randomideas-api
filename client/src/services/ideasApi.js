import axios from "axios";

class IdeasApi {
  constructor() {
    this._apiUrl = "/api/ideas";
  }

  getIdeas() {
    return axios.get(this._apiUrl);
  }

  addIdea(idea) {
    return axios.post(this._apiUrl, idea);
  }

  updateIdea(id, data) {
    return axios.put(`${this._apiUrl}/${id}`, data);
  }

  deleteIdea(id) {
    const username = localStorage.getItem("username")
      ? localStorage.getItem("username")
      : "";
    return axios.delete(`${this._apiUrl}/${id}`, {
      data: {
        username,
      },
    });
  }
}

export default new IdeasApi();
