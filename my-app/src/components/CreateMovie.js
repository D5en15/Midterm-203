import React from 'react';

const CreateMovie = ({ onChangeForm, createMovie }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7 mrgnbtm">
          <h2>Create Movie</h2>
          <form>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="exampleInputEmail1">Title</label>
                <input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="title"
                  id="title"
                  aria-describedby="emailHelp"
                  placeholder="Title"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="exampleInputPassword1">Genre</label>
                <input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="genre"
                  id="genre"
                  placeholder="Genre"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="exampleInputEmail1">Director</label>
                <input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="director"
                  id="director"
                  aria-describedby="emailHelp"
                  placeholder="Director"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="exampleInputPassword1">Release Year</label>
                <input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="release_year"
                  id="release_year"
                  placeholder="Release Year"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => createMovie()}
              className="btn btn-danger">
              Create
            </button>
            
          </form>

          <br></br>
          
        </div>
      </div>
    </div>
  );
};

export default CreateMovie;
