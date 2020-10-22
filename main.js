function displaySize(target) {
  return () => {
    const { clientWidth, clientHeight } = target;
    target.innerText = `${clientWidth}x${clientHeight}`;
  }
}

function main(e) {
  const vpp = document.querySelector(".virtual-viewport");
  displaySize(vpp)();
  window.addEventListener("resize", displaySize(vpp));
}

window.addEventListener("DOMContentLoaded", main);
