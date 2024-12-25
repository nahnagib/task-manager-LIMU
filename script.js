const loginUserBtn = document.getElementById('login-user-btn');
const loginAdminBtn = document.getElementById('login-admin-btn');
const logoutBtn = document.getElementById('logout-btn');
const taskPanel = document.getElementById('task-panel');
const taskList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add-task-btn');
const taskTitleInput = document.getElementById('task-title');
const taskDescInput = document.getElementById('task-desc');
const backToLandingBtn = document.getElementById('back-to-landing-btn');
const updateLandingBtn = document.getElementById('update-landing-btn');
const landingTitleInput = document.getElementById('landing-title-input');
const landingSubtitleInput = document.getElementById('landing-subtitle-input');
const adminPanel = document.getElementById('admin-panel');
const backToLandingAdminBtn = document.getElementById('back-to-landing-admin-btn');
const updateBtn = document.getElementById('update-btn'); // Update button inside admin panel


const originalTitle = "Task Management System";
const originalSubtitle = "Organize your tasks efficiently and effectively.";


loginUserBtn.addEventListener('click', () => {
  document.getElementById('landing').style.display = 'none';
  taskPanel.style.display = 'block';
  logoutBtn.style.display = 'inline-block';
});

loginAdminBtn.addEventListener('click', () => {
  document.getElementById('landing').style.display = 'none';
  adminPanel.style.display = 'block'; // Show the admin panel
  logoutBtn.style.display = 'inline-block';
});


logoutBtn.addEventListener('click', () => {
  clearFields(); 
  resetLandingPage(); 
  document.getElementById('landing').style.display = 'block';
  taskPanel.style.display = 'none';
  adminPanel.style.display = 'none';
  logoutBtn.style.display = 'none';
  taskList.innerHTML = ''; 
});


addTaskBtn.addEventListener('click', () => {
  const title = taskTitleInput.value.trim();
  const description = taskDescInput.value.trim();

  if (title) {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    const taskContent = document.createElement('span');
    taskContent.textContent = title + (description ? ` - ${description}` : '');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(taskContent);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskTitleInput.value = '';
    taskDescInput.value = '';
  }
});


backToLandingBtn.addEventListener('click', () => {
  document.getElementById('landing').style.display = 'block';
  taskPanel.style.display = 'none';
  taskList.innerHTML = ''; 
});


backToLandingAdminBtn.addEventListener('click', () => {
  document.getElementById('landing').style.display = 'block';
  adminPanel.style.display = 'none';
});


updateBtn.addEventListener('click', () => {
  const title = landingTitleInput.value.trim();
  const subtitle = landingSubtitleInput.value.trim();

 
  if (title && subtitle) {
    
    document.getElementById('landing-title').textContent = title;
    document.getElementById('landing-subtitle').textContent = subtitle;

   
    adminPanel.style.display = 'none';
    document.getElementById('landing').style.display = 'block'; 

    
    landingTitleInput.value = '';
    landingSubtitleInput.value = '';

   
    alert("Landing Page updated successfully!");
  } else {
    alert("Both title and subtitle are required.");
  }
});


function clearFields() {
  taskTitleInput.value = '';
  taskDescInput.value = '';
  landingTitleInput.value = '';
  landingSubtitleInput.value = ''; 
  taskList.innerHTML = ''; 
}


function resetLandingPage() {
  
  document.getElementById('landing-title').textContent = originalTitle;
  document.getElementById('landing-subtitle').textContent = originalSubtitle;
}
