import IdeasApi from "../services/ideasApi";
import IdeaList from "./IdeaList";

class IdeaForm {
  constructor() {
    this._formModal = document.getElementById("form-modal");
    this._ideaList = new IdeaList();
  }

  addEventListener() {
    this._form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (
      !this._form.elements.text.value ||
      !this._form.elements.tag.value ||
      !this._form.elements.username.value
    ) {
      alert("Please enter all fields");
      return;
    }

    //save user to localStorage
    localStorage.setItem("username", this._form.elements.username.value);

    const idea = {
      text: this._form.elements.text.value,
      tag: this._form.elements.tag.value,
      username: this._form.elements.username.value,
    };

    //Add idea to server
    const newIdea = await IdeasApi.addIdea(idea);

    //Add idea to list
    this._ideaList.addIdeaToList(newIdea.data.data);

    //Clear fields

    this._form.elements.text.value = "";
    this._form.elements.tag.value = "";
    this._form.elements.username.value = "";
    this.render();
    document.dispatchEvent(new Event("closemodal"));
  }

  render() {
    this._formModal.innerHTML = `
    <form id="idea-form">
          <div class="form-control">
            <label for="idea-text">Enter a Username</label>
            <input type="text" name="username" id="username" value="${
              localStorage.getItem("username")
                ? localStorage.getItem("username")
                : ""
            }" />
          </div>
          <div class="form-control">
            <label for="idea-text">What's Your Idea?</label>
            <textarea name="text" id="idea-text"></textarea>
          </div>
          <div class="form-control">
            <label for="tag">Tag</label>
            <input type="text" name="tag" id="tag" />
          </div>
          <button class="btn" type="submit" id="submit">Submit</button>
        </form>
    `;
    this._form = document.getElementById("idea-form");
    this.addEventListener();
  }
}

export default IdeaForm;

/* 
class IdeaForm {
  constructor() {
    this._formModal = document.getElementById("idea-form");
    this._formusername = document.getElementById("username");
    this._formmessage = document.getElementById("idea-text");
    this._formtag = document.getElementById("tag");
    this._formModal.addEventListener("submit", this.submitForm.bind(this));
  }
  submitForm(e) {
    e.preventDefault();
    if (!this._username.value || this._username.value === " ") {
      alert("Please Add a username");
      return;
    }
  }
}

export default IdeaForm;
 */
