import { useState } from "react";
import "./App.css";

const initialFormData = {
  author: "",
  title: "",
  body: "",
  public: false,
};

function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [posts, setPosts] = useState([]);

  function updateFormData(event) {
    const key = event.target.name;

    const value =
      event.target.type === "checkbox" ? event.target.checked : event.target.value;

    setFormData({
      ...formData,
      [key]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setPosts((current) => [...current, { ...formData }]);
    setFormData(initialFormData);
  }

  return (
    <>
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Nome Autore</label>
              <input
                name="author"
                id="name"
                type="text"
                className="form-control mb-3"
                value={formData.author}
                onChange={updateFormData}
                required
              />

              <label htmlFor="title">Titolo</label>
              <input
                name="title"
                id="title"
                type="text"
                className="form-control mb-3"
                value={formData.title}
                onChange={updateFormData}
                required
              />

              <label htmlFor="body">Contenuto</label>
              <textarea
                name="body"
                id="messaggio"
                className="form-control mb-3"
                value={formData.body}
                onChange={updateFormData}
                rows={4}
                required
              ></textarea>

              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  name="public"
                  id="public"
                  className="form-check-input"
                  checked={formData.public}
                  onChange={updateFormData}
                />
                <label className="form-check-label" htmlFor="public">
                  Post pubblico
                </label>
              </div>

              <button type="submit" className="btn btn-primary">
                Invia
              </button>
            </form>
          </div>
        </div>


        <div className="row mt-5">
          <div className="col-md-8">
            <h4>Post inseriti</h4>

            {posts.length === 0 ? (
              <p className="text-muted">Nessun post ancora.</p>
            ) : (
              posts.map((post, i) => (
                <div className="card mb-3" key={i}>
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Autore: {post.author}</h6>
                    <p className="card-text">{post.body}</p>
                    {post.public && <span className="badge bg-success">Pubblico</span>}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
