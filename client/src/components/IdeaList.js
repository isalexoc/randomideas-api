class IdeaList {
  constructor() {
    this._ideaListEl = document.getElementById("idea-list");
    this._ideas = [
      {
        id: 1,
        text: "This is a test text for the idea",
        tag: "Technology",
        username: "isaac1987",
        date: "08/05/2022",
      },
      {
        id: 2,
        text: "This is a test text for the idea",
        tag: "Software",
        username: "isaac1987",
        date: "02/05/2022",
      },
      {
        id: 3,
        text: "This is a test text for the idea",
        tag: "Business",
        username: "isaac1987",
        date: "01/05/2021",
      },
      {
        id: 4,
        text: "This is a test text for the idea",
        tag: "Agricultureee",
        username: "isaac1987",
        date: "10/05/2023",
      },
    ];
    this._validTags = new Set();
    this._validTags.add("technology");
    this._validTags.add("software");
    this._validTags.add("business");
    this._validTags.add("education");
    this._validTags.add("health");
    this._validTags.add("inventions");
  }

  getTagClass(tagname) {
    tagname = tagname.toLowerCase();
    let tagClass = "";
    if (this._validTags.has(tagname)) {
      tagClass = `tag-${tagname}`;
    } else {
      tagClass = "";
    }
    return tagClass;
  }

  render() {
    this._ideaListEl.innerHTML = this._ideas
      .map((idea) => {
        const tagClass = this.getTagClass(idea.tag);
        return `
        <div class="card">
          <button class="delete"><i class="fas fa-times"></i></button>
          <h3>
            ${idea.text}
          </h3>
          <p class="tag ${tagClass}
          ">${idea.tag.toUpperCase()}</p>
          <p>
            Posted on <span class="date">${idea.date}</span> by
            <span class="author">${idea.username}</span>
          </p>
        </div>
        `;
      })
      .join("");
  }
}

export default IdeaList;
