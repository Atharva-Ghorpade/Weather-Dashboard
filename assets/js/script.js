const icon = document.getElementById("mode-icon");
      const button = document.getElementById("mode-toggle");

      function toggleMode() {
        document.body.classList.toggle("dark-mode");
        updateIcon();
      }


      function updateIcon() {
        if (document.body.classList.contains("dark-mode")) {
          icon.innerHTML = `<img src="assets/images/svg/moon.svg" alt="Dark Mode" />`;
        } else {
          icon.innerHTML = `<img src="assets/images/svg/sun.svg" alt="Light Mode" />`;
        }
      }

     
      button.addEventListener("click", toggleMode);

      updateIcon();

    