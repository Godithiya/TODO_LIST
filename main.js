// kita tangkap element html yang memiliki id input-box dan masukan kedalam variable inputBox
const inputBox = document.getElementById("input-box");

// kita tangkap element html yang memiliki id list-container dan masukan kedalam variable listContainer
const listContainer = document.getElementById("list-container");

// membuat fungsi untuk button Add pada html
function addTask(){
    // didalam fungsi addTask kita buat condition if..else
    if(inputBox.value === ''){
        // ketika nilai (value) dari inputBox dari segi nilai dan data sama dengan kosong/tidak berisi (''), maka dia akan memunculkan alert dibwh.
        alert("You must write something!");
    }
    // jika nilai (value) dari inputBox tidak kosong atau user mengisi inputBox, maka dia akan menjalankan kondisi else ini
    else{
        // kita buat element HTML "li" dan dimasukan ke variable li.
        let li = document.createElement("li");

        // mengubah isi elemen li dengan teks yang diambil dari nilai (value) input di elemen inputBox
        li.innerHTML = inputBox.value;

        // menambahkan element li nya kedalam listContainer sebagai anak dari listContainer
        listContainer.appendChild(li);

        // kita buat element HTML "span" dan dimasukan ke variable span
        let span = document.createElement("span");

        // Di sini, innerHTML dari elemen span diisi dengan karakter Unicode \u00d7, yang mewakili simbol "×" (tanda kali)
        span.innerHTML = "\u00d7"; // "\u00d7" adalah Multiplication Sign untuk javascript program language

        // memasukan/menambahkan element span nya kedalam elemetn li sebagai anak dari element li
        li.appendChild(span);
    }
     // kosongkan nilai inputBox setelah task berhasil ditambahkan
    inputBox.value = "";

     // panggil fungsi saveData untuk menyimpan data yang sudah ditambahkan ke localStorage
    saveData();
}

// tambahkan event listener ke listContainer untuk menangani klik pada elemen di dalamnya
listContainer.addEventListener("click", function(e){
    // jika elemen yang diklik adalah elemen "LI"
    if(e.target.tagName === "LI"){
        // tambahkan atau hapus class "checked" pada elemen yang diklik
        e.target.classList.toggle("checked");
        // simpan perubahan ke localStorage
        saveData();
    }
    // jika elemen yang diklik adalah elemen "SPAN" (simbol "×")
    else if(e.target.tagName === "SPAN"){
        // hapus elemen "li" yang menjadi parent dari elemen "span" yang diklik
        e.target.parentElement.remove();
        // simpan perubahan ke localStorage
        saveData();
    }
}, false);

// fungsi saveData untuk menyimpan konten listContainer ke localStorage
function saveData(){
    // simpan data dalam bentuk HTML di dalam listContainer dengan key "data" di localStorage
    localStorage.setItem("data", listContainer.innerHTML);
}

// fungsi showTask untuk menampilkan kembali data dari localStorage saat halaman dimuat
function showTask(){
    // ambil data dari localStorage dengan key "data" dan tampilkan ke dalam listContainer
    listContainer.innerHTML = localStorage.getItem("data");
}

// panggil fungsi showTask untuk menampilkan data saat halaman pertama kali dimuat
showTask();