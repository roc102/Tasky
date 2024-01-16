import React from 'react'
import './TaskyApp.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const TaskyApp = () => {

  var state = {
    taskList: [],
  };
  
  // DOM Objects
  var taskContents = document.querySelector(".task__contents");
  var taskModal = document.querySelector(".task__modal__body");
  
  // console.log(taskModal);
  
  var htmlTaskContent = ({ id, title, description, type, url }) => `
     <div class='col-md-6 col-lg-4 mt-3' id=${id} key=${id}>
          <div class='card shadow-sm task__card'>
              <div class='card-header d-flex justify-content-end task__card__header'>
                <button type="button" class="btn btn-outline-info mr-2" name="${id}">
                  <i class="fas fa-pencil-alt" name=${id}></i>
                </button>
                 <button type="button" class="btn btn-outline-danger mr-2" name="${id}">
                  <i class="fas fa-trash-alt" name=${id}></i>
                </button>
              </div>
              <div class="card-body">
                 ${
                   url &&
                   `<img width='100%' src=${url} alt='card image cap' class='card-img-top md-3 rounded-lg' />`
                 }
              <h4 class="card-title">${title}</h4>
              <p class="description trim-3-lines text-muted data-gram_editor='false'">${description}</p>
              <div class="tags text-white d-flex flex-wrap">
                <span class="badge bg-primary m-1">${type}</span>
              </div>
              </div>
              <div class="card-footer">
                <button type="button" class="btn btn-outline-primary float-right" data-bs-toggle="modal" data-bs-target="#showTask">Open Task</button>
              </div>
          </div>
      </div>
  `;

  var htmlModalContent = ({ id, title, description, url }) => {
    var date = new Date(parseInt(id));
    return `
    <div id=${id}>
       ${
         url &&
         `<img width='100%' src=${url} alt='card image cap' class='card-img-top md-3 rounded-lg' />`
       }
       <strong class='text-sm text-muted'>Created on ${date.toDateString()}</strong>
       <h2 class='my-3'>${title}</h2>
       <p class='lead'>${description}</p>
    </div>
    `;
  };
  
  var loadInitialData = () => {
    var localStorageCopy = JSON.parse(localStorage.tasks);
  
    if(localStorageCopy) state.taskList = localStorageCopy.tasks;
  
    state.taskList.map((cardDate)=>{
      taskContents.insertAdjacentHTML("beforeend", htmlTaskContent(cardDate));
    })
  }
  
  
  var handleSubmit = (event) => {
    const id = `${Date.now()}`;
    const input = {
      url: document.getElementById("imageUrl").value,
      title: document.getElementById("taskTitle").value,
      type: document.getElementById("tags").value,
      description: document.getElementById("taskDescription").value,
    };
  }
  
  
  
  var updateLocalStorage = () => {
    localStorage.setItem('task', JSON.stringify({
      tasks: state.taskList,
    }))
  }
  
  return (
    <main>
      <div className="add__new__bth__mobile__only">
        <button className="btn btn-primary d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#addNewModal" type="submit">
                <i className="fas fa-plus"></i>
                Add New Item
          </button>
      </div>

      {/* <!-- Modal: Form Modal --> */}
      <div class="modal fade" id="addNewModal" tabindex="-1" aria-labelledby="addNewModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="addNewModalLabel">Add New Task</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="imageUrl" class="form-label">Image URL</label>
                <input type="url" id="imageUrl" class="form-control" placeholder="http://example.com/image.png" />
              </div>
              <div class="mb-3">
                <label for="taskTitle" class="form-label">Task Title</label>
                <input type="text" id="taskTitle" class="form-control" placeholder="Task Title" required />
              </div>
              <div class="mb-3">
                <label for="tags" class="form-label">Task Type</label>
                <input type="text" id="tags" class="form-control" placeholder="Task Type Tags" required />
              </div>
              <div class="mb-3">
                <label for="taskDescription" class="form-label">Task Description</label>
              <textarea type="text" id="taskDescription" class="form-control" placeholder="Task Description" required ></textarea>
              </div>
            </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Open Task --> */}

      {/* <!-- Modal --> */}
      <div class="modal fade" id="showTask" tabindex="-1" aria-labelledby="showTaskLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="showTaskLabel">Task Details</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            {/* <!-- dynamic functionality --> */}
            <div class="modal-body task__modal__body">
            
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
            </div>
          </div>
        </div>
      </div>

    <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body data-bs-theme="dark>
      <div class="container-fluid">
        <a class="navbar-brand text-white" href="#">Tasky Appln</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon text-white"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
            </li>
          
          </ul>
        
            <button class="btn btn-primary d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#addNewModal" type="submit">
              <i class="fas fa-plus"></i>
              Add New Item
        </button>
        
        </div>
      </div>
    </nav>

    <div class="container">
      <section class="mt-4">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="input-group flex-nowrap shadow-lg">
              <input type="search" class="form-control" placeholder="Search your tasks here.."/>
              <span class="input-group-text">
                <i class="fas fa-search"></i>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-4">
        {/* <!-- dynamic functionality --> */}
        <div class="row task__contents">
          {/* <!-- <h5>Hey my cards sections</h5> --> */}
        </div>
      </section>
    </div>

    </main>
  )
}

export default TaskyApp