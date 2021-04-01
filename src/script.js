// console.log("OK");

// View.Prepare();
// View.ShowInputSection();
// View.ShowCollectionSection();

Controller.Prepare();

/* Model.Insert("Első", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus quas dolore similique itaque quae accusantium quis modi ullam tempora repudiandae?");
Model.Insert("Második", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus quas dolore similique itaque quae accusantium quis modi ullam tempora repudiandae?");
Model.Insert("Harmadik", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus quas dolore similique itaque quae accusantium quis modi ullam tempora repudiandae?"); */
/* Model.SetDone(1);
console.log(Model.GetAll()); */

Controller.CollectionActivity();

// adatok letárolása localstorage
// var obj = { title: "cím", description: "leírás" };
// localStorage.setItem("data", JSON.stringify(obj));
// var data = localStorage.getItem("data");
// console.log(data);
// data = JSON.parse(data);
// console.log(data);
// console.log(data.title);
// console.log(description);