const taksInput = document.querySelector("#taksInput");
const addingTaks = document.querySelector("#addingTaks");
const taskHeading = document.querySelector("#taskHeading");
const complete = document.querySelectorAll("#done");
const cancle = document.querySelector("#delete");
const taskContainer = document.querySelector("#taskContainer");
const taskForm = document.querySelector("#taskForm");
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const svgDelete = `<svg width="18" height="20" viewBox="0 0 18 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2 18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H14C14.5304 20 15.0391 19.7893 15.4142 19.4142C15.7893 19.0391 16 18.5304 16 18V6H18V4H14V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0H6C5.46957 0 4.96086 0.210714 4.58579 0.585786C4.21071 0.960859 4 1.46957 4 2V4H0V6H2V18ZM6 2H12V4H6V2ZM5 6H14V18H4V6H5Z"
                        fill="black" />
                    <path d="M6 8H8V16H6V8ZM10 8H12V16H10V8Z" fill="black" />
                </svg>`;
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", "delete");
    deleteBtn.setAttribute("data-btn", "this is my btn");
    deleteBtn.classList.add("ms_3", "bg_transparent", "border_none");
    deleteBtn.innerHTML = svgDelete;
    const svgDone = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18Z"
                        fill="black" />
                    <path
                        d="M7.99909 11.587L5.70009 9.29197L4.28809 10.708L8.00109 14.413L14.7071 7.70697L13.2931 6.29297L7.99909 11.587Z"
                        fill="black" />
                </svg>`;
    const doneBtn = document.createElement("button");
    doneBtn.setAttribute("id", "done");
    doneBtn.setAttribute("data-btn", "this is my btn");
    doneBtn.classList.add("ms_3", "bg_transparent", "border_none");
    doneBtn.innerHTML = svgDone;
    const buttonParent = document.createElement("div");
    buttonParent.classList.add("d_flex");
    buttonParent.append(doneBtn, deleteBtn);
    const taskName = document.createElement("p");
    taskName.setAttribute("id", "taskHeading");
    taskName.innerText = taskInput.value;
    const taskDiv = document.createElement("div");
    taskDiv.setAttribute("id", "task");
    taskDiv.classList.add("d_flex", "justify_content_between", "task");
    taskDiv.append(taskName, buttonParent);
    taskContainer.append(taskDiv);
    taskInput.value = "";
    doneBtn.addEventListener("click", () => {
        doneBtn.parentElement.parentElement.classList.toggle("done");
    });
    deleteBtn.addEventListener("click", () => {
        deleteBtn.parentElement.parentElement.remove();
    });
});