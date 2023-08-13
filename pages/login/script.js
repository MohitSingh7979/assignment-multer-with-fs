const form = document.getElementById("login_form");

const infoElem = document.getElementById("info");

form.addEventListener("submit", (eve) => {
  eve.preventDefault();
  const fd = new FormData(form);

  fetch("/user", { method: "POST", body: fd })
    .then((res) => res.json())
    .then((res) => {
      if (res.errors && res.errors.length > 0) {
        infoElem.innerHTML = res.errors.join(",");
      } else {
        infoElem.innerHTML = "Login successfully.";
        setTimeout(()=>{
          location.href = "/";
        }, 100);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
