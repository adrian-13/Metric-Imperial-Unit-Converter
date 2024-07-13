document.addEventListener("DOMContentLoaded", function () {
  // Cache DOM elements
  const themeToggle = document.getElementById("theme-toggle");
  const upperSection = document.getElementById("upper-section");
  const groupSections = document.querySelectorAll(".group");
  const inputEl = document.getElementById("input-el");
  const convertBtn = document.getElementById("convert-btn");

  // Theme colors
  const lightTheme = {
    upperSection: "#7c3aed",
    body: "#f4f4f4",
    input: {
      background: "#7c3aed",
      border: "1px solid #b295ff",
    },
    groupSection: {
      background: "#ffffff",
      h3Color: "#5a537b",
      pColor: "#353535",
    },
    button: {
      color: "#7c3aed",
      border: "1px solid #7c3aed",
    },
  };

  const darkTheme = {
    upperSection: "#1F2937",
    body: "#1F2937",
    input: {
      background: "#1F2937",
      border: "1px solid #6B7280",
    },
    groupSection: {
      background: "#273549",
      h3Color: "#9CA3AF",
      pColor: "#FFFFFF",
    },
    button: {
      color: "#1F2937",
      border: "1px solid #1F2937",
    },
  };

  // Apply theme function
  function applyTheme(theme) {
    upperSection.style.backgroundColor = theme.upperSection;
    document.body.style.backgroundColor = theme.body;
    inputEl.style.backgroundColor = theme.input.background;
    inputEl.style.border = theme.input.border;
    convertBtn.style.color = theme.button.color;
    convertBtn.style.border = theme.button.border;

    groupSections.forEach((groupSection) => {
      groupSection.style.backgroundColor = theme.groupSection.background;
      groupSection
        .querySelectorAll("h3")
        .forEach((h3) => (h3.style.color = theme.groupSection.h3Color));
      groupSection
        .querySelectorAll("p")
        .forEach((p) => (p.style.color = theme.groupSection.pColor));
    });
  }

  // Change theme function
  function changeTheme(isDark) {
    applyTheme(isDark ? darkTheme : lightTheme);
  }

  // Button background change function
  function changeButtonBackground(isPressed) {
    const theme = themeToggle.checked ? darkTheme : lightTheme;
    convertBtn.style.backgroundColor = isPressed
      ? theme.button.color
      : "#ffffff";
    convertBtn.style.color = isPressed ? "#ffffff" : theme.button.color;
  }

  // Event listeners
  themeToggle.addEventListener("change", () =>
    changeTheme(themeToggle.checked)
  );

  convertBtn.addEventListener("mousedown", () => changeButtonBackground(true));
  convertBtn.addEventListener("mouseup", () => changeButtonBackground(false));
  convertBtn.addEventListener("mouseleave", () =>
    changeButtonBackground(false)
  );
});
