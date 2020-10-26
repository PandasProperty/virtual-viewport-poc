function displaySize(target) {
  return (_) => {
    const { clientWidth, clientHeight } = target;
    target.insertAdjacentText("afterbegin", `${clientWidth}x${clientHeight}`);
  }
}

function main(_) {
  const vpp = document.querySelector(".virtual-viewport");
  displaySize(vpp)();
  window.addEventListener("resize", displaySize(vpp));
}

// window.addEventListener("DOMContentLoaded", main);
