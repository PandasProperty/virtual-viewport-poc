function trimUnits(size) {
  return size.slice(0, size.length - 2);
}

function updateViewportHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

function handleResize(...subjects) {
  return ({ target }) => {
    updateViewportHeight();
    subjects.forEach(s => s.update(target));
  };
}

class Subject {
  #element = null;
  
  constructor(element) { this.#element = element; }
  
  update({ innerWidth, innerHeight }) {
    const { width, height } = getComputedStyle(this.#element);
    const scale = Math.min(
      innerWidth / parseInt(trimUnits(width)),
      innerHeight / parseInt(trimUnits(height))
    );
    this.#element.style.transform = `scale(${scale})`;
  }
}

function main(_) {
  const subject = new Subject(document.querySelector("#virtual-viewport"));
  const handleResizeMemo = handleResize(subject);
  window.addEventListener("resize", handleResizeMemo);
  updateViewportHeight();
}

window.addEventListener("DOMContentLoaded", main);
