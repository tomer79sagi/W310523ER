// מה הקוד שתכתבו על מנת שבכל לחיצה של המשתמש על ctrl+b בחלון הדפדפן יופעל alert("you find the secret key binding")

// V find out keybinding is pressed
document.addEventListener("keydown", function (event) {
  // console.log(event.key, event.ctrlKey);

  // check is it ctrl + b
  if ((event.key === "b" || event.key === "B") && event.ctrlKey) {
    //    V - show alert
    alert("surprise");
  }
});
