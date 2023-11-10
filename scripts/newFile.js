if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla é legal, ${storedName`;
  }

  myButton.onclick = () => {
    setUserName();
  };`;
}
