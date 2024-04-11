function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  var phoneRegex = /^\d{10,15}$/;
  return phoneRegex.test(phone);
}

function isValidMessage(message) {
  return message.trim().split(/\s+/).length <= 50;
}

$("#cekvalidasi").submit(function (e) {
  e.preventDefault();
  var name = $("#name").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var budget = $("#budget").val();
  var message = $("#message").val();

  // Validasi
  if (name.trim() == "") {
    alert("Mohon masukkan nama lengkap Anda.");
    return;
  }
  if (email.trim() == "") {
    alert("Mohon masukkan alamat email Anda.");
    return;
  }
  if (!isValidEmail(email)) {
    alert("Mohon masukkan alamat email yang valid.");
    return;
  }
  if (phone.trim() == "") {
    alert("Mohon masukkan nomor handphone Anda.");
    return;
  }
  if (!isValidPhone(phone)) {
    alert("Mohon masukkan nomor handphone yang valid.");
    return;
  }
  if (budget.trim() == "") {
    alert("Mohon masukkan budget Anda.");
    return;
  }
  if (message.trim() == "") {
    alert("Mohon masukkan pesan Anda.");
    return;
  }
  if (!isValidMessage(message)) {
    alert("Pesan Anda terlalu panjang. Maksimal 50 kata.");
    return;
  }

  if (id == "") {
    addStudent(name, major);
  } else {
    updateStudent(id, name, major);
  }
  $("#student-form")[0].reset();
});
