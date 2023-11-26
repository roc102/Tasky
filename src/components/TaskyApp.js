import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TaskyApp.css';

const TaskList = () => {
  const [state, setState] = useState({
    taskList: [
      // Add your initial tasks here if needed
    ],
  });

  // Function to render HTML content for a task
  const renderTaskContent = ({ id, title, description, type, url }) => (
    <div className="col-md-6 col-lg-4 mt-3" id={id} key={id}>
      <div className="card shadow-sm task__card">
        <div className="card-header d-flex justify-content-end task__card__header">
          <button type="button" className="btn btn-outline-info mr-2" name={id}>
            <i className="fas fa-pencil-alt" name={id}></i>
          </button>
          <button type="button" className="btn btn-outline-danger mr-2" name={id}>
            <i className="fas fa-trash-alt" name={id}></i>
          </button>
        </div>
        <div className="card-body">
          {url && <img width="100%" src={url} alt="card image cap" className="card-img-top md-3 rounded-lg" />}
          <h4 className="card-title">{title}</h4>
          <p className="description trim-3-lines text-muted data-gram_editor='false'">{description}</p>
          <div className="tags text-white d-flex flex-wrap">
            <span className="badge bg-primary m-1">{type}</span>
          </div>
        </div>
        <div className="card-footer">
          <button type="button" className="btn btn-outline-primary float-right" data-bs-toggle="modal" data-bs-target="#showTask">
            Open Task
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="row task__contents">
      {/* Use the map function to render dynamic task content */}
      {state.taskList.map(task => renderTaskContent(task))}
    </div>
  );
};

function TaskyApp() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);

  const handleAddModalClose = () => setShowAddModal(false);
  const handleAddModalShow = () => setShowAddModal(true);
  const handleTaskModalClose = () => setShowTaskModal(false);
  const handleTaskModalShow = () => setShowTaskModal(true);

  return (
    <>
      {/* Add New Task Modal */}
      <div className="modal fade" id="addNewModal" tabIndex="-1" aria-labelledby="addNewModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addNewModalLabel">
                Add New Task
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                {/* Form Fields */}
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleAddModalClose}>
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Show Task Modal */}
      <div className="modal fade" id="showTask" tabIndex="-1" aria-labelledby="showTaskLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="showTaskLabel">
                Task Details
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body task__modal__body">
              {/* Dynamic Content */}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleTaskModalClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        {/* Navbar Content */}
      </nav>

      {/* Container */}
      <div className="container">
        {/* Search Section */}
        <section className="mt-4">
          {/* Search Input */}
        </section>

        {/* Task Contents */}
        <section className="mt-4">
          <TaskList /> {/* Include the TaskList component */}
        </section>
      </div>

      {/* Bootstrap JavaScript */}
      {/* <script src="index.js"></script> */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}

export default TaskyApp;
