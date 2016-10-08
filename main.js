// Initialize Firebase
var config = {
  apiKey: "AIzaSyDC-FRaJdW9puVBf8p34qu_x7IBqaVlrZ4",
  authDomain: "firefood-54789.firebaseapp.com",
  databaseURL: "https://firefood-54789.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "734215276517"
};
firebase.initializeApp(config);

var orderRef = firebase.database().ref().child("Orders")

var createOrder = function() {
  orderRef.push({
    Restaraunt: document.getElementById("restaraunt").value,
    order: document.getElementById("order").value,
    time: Date()
  });  

  return false;
};

orderRef.on('child_added', function(snapshot) {
  console.log(snapshot.val());
  var newDiv = document.createElement("div");
  var title = document.createElement("h2");
  var orderText = document.createElement("p");
  var timeText = document.createElement("p");
  var divider = document.createElement("hr");

  title.innerHTML = snapshot.child("Restaraunt").val();
  orderText.innerHTML = snapshot.child("order").val();
  timeText.innerHTML = snapshot.child("time").val();

  newDiv.appendChild(title);
  newDiv.appendChild(orderText);
  newDiv.appendChild(timeText);
  newDiv.appendChild(divider);
  document.body.appendChild(newDiv);
});
