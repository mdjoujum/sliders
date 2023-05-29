document.addEventListener("DOMContentLoaded", function() {
  const scrollLeftButton = document.getElementById("scrollLeftButton");
  const scrollRightButton = document.getElementById("scrollRightButton");
  const carousel = document.querySelector(".carousel");
  const buses = document.querySelectorAll(".bus");
  const radioContainer = document.createElement("div");

  // Hide all buses except the first one
  for (let i = 1; i < buses.length; i++) {
    buses[i].style.display = "none";
  }

  // Create radio buttons for each bus
  buses.forEach((bus, index) => {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "bus-radio";
    radio.value = index;
    radio.addEventListener("click", function() {
      showBus(index);
    });
    radioContainer.appendChild(radio);
  });

  // Append radio buttons to the container
  carousel.insertAdjacentElement("afterend", radioContainer);

  function showBus(index) {
    buses.forEach((bus, i) => {
      if (i === index) {
        bus.style.display = "block";
      } else {
        bus.style.display = "none";
      }
    });
  }

  scrollLeftButton.addEventListener("click", function() {
    const checkedRadio = document.querySelector("input[name='bus-radio']:checked");
    if (checkedRadio) {
      const currentIndex = parseInt(checkedRadio.value);
      const previousIndex = (currentIndex - 1 + buses.length) % buses.length;
      showBus(previousIndex);
      checkedRadio.checked = false;
      radioContainer.children[previousIndex].checked = true;
    }
  });

  scrollRightButton.addEventListener("click", function() {
    const checkedRadio = document.querySelector("input[name='bus-radio']:checked");
    if (checkedRadio) {
      const currentIndex = parseInt(checkedRadio.value);
      const nextIndex = (currentIndex + 1) % buses.length;
      showBus(nextIndex);
      checkedRadio.checked = false;
      radioContainer.children[nextIndex].checked = true;
    }
  });
});
