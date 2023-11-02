function showPopup() {
  var email = document.getElementById('emailInput').value;
  var name = document.getElementById('nameInput').value;
  if (email && name) {
      alert('Your ticket has been booked. Thank you, ' + name + '!');
  } else {
      alert('Please enter your email and name before buying the ticket.');
  }
}