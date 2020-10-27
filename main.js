function trimUnits(size) {
  return size.slice(0, size.length - 2);
}

function handleResize({ target }) {
  const { innerWidth, innerHeight } = target;
  document.title = `${innerWidth}x${innerHeight}`;
  const vpp = document.querySelector("#virtual-viewport");
  
  const { width, height } = getComputedStyle(vpp);

  const scale = Math.min(
    innerWidth / parseInt(trimUnits(width)),
    innerHeight / parseInt(trimUnits(height))
  );
  vpp.style.transform = `scale(${scale})`;
}

function main(_) {
  window.addEventListener("resize", handleResize);
}

window.addEventListener("DOMContentLoaded", main);
