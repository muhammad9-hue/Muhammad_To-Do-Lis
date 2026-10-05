const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const emptyMsg = document.getElementById("emptyMsg");

function updateEmptyMessage() {
  emptyMsg.classList.toggle("hidden", taskList.children.length > 0);
}

function addTask() {
  const text = taskInput.value.trim();

  // Validasi: input tidak boleh kosong
  if (text === "") {
    alert("Catatan Anda tidak boleh kosong");
    return;
  }

  const li = document.createElement("li");

  // Checkbox untuk menandai tugas selesai
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    li.classList.toggle("done", checkbox.checked);
  });

  const span = document.createElement("span");
  span.textContent = text;

  // Tombol hapus
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Hapus";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", function () {
    li.remove();
    updateEmptyMessage();
  });

  li.append(checkbox, span, deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
  updateEmptyMessage();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addTask();
});

updateEmptyMessage();