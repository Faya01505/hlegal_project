(function () {
    const tabs = document.querySelectorAll(".tabs__item");
      const contents = document.querySelectorAll(".tabs__panel");
  
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        tabs.forEach((n) => n.classList.remove("active"));
        contents.forEach((m) => m.classList.remove("active"));
          tab.classList.add("active");
  
        contents[index].classList.add("active");
      });
    });
  })();