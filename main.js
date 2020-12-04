const tabItems = document.querySelectorAll(".tab-item");
const tabContent = document.querySelectorAll(".tab-content-item");

function selectItem(e) {
  removeBorder();
  removeShow();

  //Adding border to the selected tabItem
  this.classList.add("tab-border");

  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //console.log(tabContentItem);

  //Add show class
  tabContentItem.classList.add("show");
}

//Border remover function
function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

//show class remover function
function removeShow() {
  tabContent.forEach((item) => item.classList.remove("show"));
}

// Tab click Listener
tabItems.forEach((item) => item.addEventListener("click", selectItem));
