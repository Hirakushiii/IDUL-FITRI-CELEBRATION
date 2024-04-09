function displayClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Menambahkan nol di depan angka jika nilainya kurang dari 10
    hours = addZeroPrefix(hours);
    minutes = addZeroPrefix(minutes);
    seconds = addZeroPrefix(seconds);

    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").textContent = timeString;

    // Memanggil kembali fungsi displayClock setiap detik
    setTimeout(displayClock, 1000);
}

function addZeroPrefix(value) {
    if (value < 10) {
        return "0" + value;
    } else {
        return value;
    }
}

// Memulai jam ketika halaman dimuat
window.onload = function() {
    displayClock();
};