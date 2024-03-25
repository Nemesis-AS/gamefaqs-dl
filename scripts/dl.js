function guideExists() {
 return !(document.getElementById("faqtext") === null); 
}

function createButton() {
  const btn = document.createElement("a");
  setStyles(btn, {
    position: "sticky",
    bottom: "2rem",
    left: "2rem",
    "font-size": "1.4rem",
    padding: ".25rem .5rem",
    "background-color": "rgba(0, 0, 0, .12)"
  });
  btn.textContent = "Download";
  btn.setAttribute("href", generateDownloadString());
  btn.setAttribute("download", getTitle());
  document.body.appendChild(btn);
}

function setStyles(el, styles) {
  Object.keys(styles).forEach(key => {
    el.style[key] = styles[key];
  });
}

function generateDownloadString() {
  const parentEl = document.getElementById("faqtext");

  let textData = "data:text/plain;charset=utf-8,";
  
  for (const child of parentEl.children) {
    textData += encodeURIComponent(child.textContent);
  }

  return textData;
}

function getTitle() {
  // @todo! Add fallback
  const titleEl = document.querySelector(".header_split .header_right h1.page-title");
  const faqID = window.location.pathname.split("/").at(-1);
  return faqID + "___" + titleEl.textContent + ".txt";
}

function main() {
 if (!guideExists()) {
    return;
  }

  createButton();
}

window.onload = main;
