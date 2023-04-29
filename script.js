const model = document.getElementById("model-container");
const mainContainer = document.getElementById("main-container");
const tripsBox = document.getElementById("trips-box");
const boxHeading = document.getElementById("box-heading");
const modelInput = document.getElementById("model-input");
const modelInput2 = document.getElementById("model-input2");
const modelListContainer = document.getElementById("modelList-container");
const addList = document.getElementById("addList");
const dos = document.getElementById("do");
const back = document.getElementById("back");
const noItems = document.getElementById("no-items");

let tempId = 0;
const showModel = () => {
  model.style.display = "block";
  modelInput.focus();
};

const closeModel = () => {
  model.style.display = "none";
  modelListContainer.style.display = "none";
};

const closeModell = () => {
  model.style.display = "none";
  modelListContainer.style.display = "none";
};

let count = 0;
const addModel = () => {
  const box = document.createElement("div");
  const trips = document.getElementById("trips-box");
  box.className = "box";
  count++;
  box.id = count;
  const boxHeading = document.createElement("div");
  boxHeading.className = "box-heading";
  boxHeading.addEventListener("click", reDirect);
  boxHeading.myParam = modelInput.value;

  const boxLine = document.createElement("hr");
  box.append(boxHeading);
  box.append(boxLine);
  // const boxContents = document.createElement("div");
  // boxContents.classList.add("box-contents");
  const ulList = document.createElement("ul");
  ulList.classList.add("box-contents");
  ulList.id = `ulList-${count}`;
  box.append(ulList);
  // box.append(boxContents);
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  const delB = document.createElement("img");
  delB.src = "delete.svg";
  delB.id = "delB";
  delB.innerHTML = "del";

  const addB = document.createElement("img");
  addB.id = "addB";
  addB.src = "add.png";
  addB.addEventListener("click", add);
  addB.myParam = count;

  imgContainer.append(delB);
  imgContainer.append(addB);

  addList.addEventListener("click", addLists);
  addList.myParam = count;

  delB.addEventListener("click", del);
  delB.myParam = count;
  delB.style.cursor = "pointer";
  trips.append(box);
  boxHeading.innerText = modelInput.value;
  closeModel();
  modelInput.value = "";
  box.append(imgContainer);
  noItems.style.display = "none";
};

const addModells = () => {
  const box = document.createElement("div");
  box.className = "box";
  count++;
  box.id = count;
  const boxHeading = document.createElement("div");
  boxHeading.className = "box-heading";
  // boxHeading.addEventListener("click", reDirect);
  boxHeading.myParam = modelInput.value;

  const boxLine = document.createElement("hr");
  box.append(boxHeading);
  box.append(boxLine);
  // const boxContents = document.createElement("div");
  // boxContents.classList.add("box-contents");
  const ulList = document.createElement("ul");
  ulList.classList.add("box-contents");
  ulList.id = `ulList-${count}`;
  box.append(ulList);
  // box.append(boxContents);
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  const delB = document.createElement("img");
  delB.src = "delete.svg";
  delB.id = "delB";
  delB.innerHTML = "del";

  const addB = document.createElement("img");
  addB.id = "addB";
  addB.src = "add.png";
  // addB.addEventListener("click", add);
  // addB.myParam = count;

  imgContainer.append(delB);
  imgContainer.append(addB);

  // addList.addEventListener("click", addLists);
  // addList.myParam = count;

  // delB.addEventListener("click", del);
  // delB.myParam = count;
  delB.style.cursor = "pointer";
  box.append(imgContainer);
  dos.append(box);
  boxHeading.innerText = modelInput.value;
  modelInput.value = "";
  closeModell();
};

const del = (e) => {
  const id = e.currentTarget.myParam;
  const dev = document.getElementById(id);
  console.log(dev);
  dev.remove();
  if (tripsBox.childElementCount == 0) {
    noItems.style.display = "block";
  }
};

const add = (e) => {
  tempId = e.currentTarget.myParam;
  modelListContainer.style.display = "block";
  modelInput2.focus();
};

const addLists = (e) => {
  const id = tempId;
  console.log(id);
  const ulList = document.getElementById(`ulList-${id}`);
  const Li = document.createElement("li");
  Li.classList.add("box-list");
  Li.innerText = modelInput2.value;
  const Span = document.createElement("span");
  Span.classList.add("mark");
  Span.innerText = "Mark Done";
  Li.append(Span);
  ulList.appendChild(Li);
  const num = Math.floor(Math.random() * 1000);
  Li.id = `listItem-${id}-${num}`;
  Span.addEventListener("click", strikeThrough);
  Span.myParam = `listItem-${id}-${num}`;
  modelInput2.value = "";
  modelListContainer.style.display = "none";
};

const strikeThrough = (e) => {
  const id = e.currentTarget.myParam;
  document.getElementById(id).style.textDecoration = "line-through";
  document.getElementById(id).style.color = "red";
  document.getElementById(id).getElementsByClassName("mark")[0].style.display =
    "none";
};

const reDirect = (e) => {
  window.open(`index2.html?title=${e.currentTarget.myParam}`);
};
