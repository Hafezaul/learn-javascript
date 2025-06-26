## 2. Mengubah Isi dan Struktur Elemen DOM

#### A. `textContent`

📘 Fungsi:

Mengubah teks murni dari elemen HTML. Tidak bisa menyisipkan tag HTML.

📌 Contoh:
```
<h1 id="judul">Selamat Datang</h1>
```

```
const judul = document.getElementById("judul");
judul.textContent = "Halo, Faris!";  // teks biasa aja
```
⛔️ Kalau kamu pakai judul.textContent = "<b>Hai</b>"; → hasilnya tetap teks <b>Hai</b> (bukan cetak tebal)

#### B. `innerHTML`

📘 Fungsi:

Mengubah isi elemen dan bisa menyisipkan tag HTML.

📌 Contoh:
```
<div id="konten"></div>
```

```
const konten = document.getElementById("konten");
konten.innerHTML = "<p><b>Ini teks tebal</b> dan <i>miring</i></p>";
```

⚠️ Catatan penting: `innerHTML` sangat fleksibel, tapi hati-hati terhadap XSS (kalau ngambil dari user input)

#### C. `createElement()`

📘 Fungsi:

Membuat elemen HTML baru lewat JavaScript.

📌 Contoh:
```
const paragrafBaru = document.createElement("p");
paragrafBaru.textContent = "Ini dibuat lewat JavaScript";
```
➡️ Elemen ini belum muncul di halaman sampai kamu "tempelkan" ke DOM (lihat `appendChild()`)

#### D. `appendChild()`

📘 Fungsi:
Menambahkan elemen anak ke dalam elemen induk.

📌 Contoh gabungan:

```
<div id="konten"></div>
```
```
const konten = document.getElementById("konten");
const paragraf = document.createElement("p");
paragraf.textContent = "Paragraf baru dari JS";

konten.appendChild(paragraf);
```
➡️ Sekarang `<p>` muncul di dalam `<div id="konten">`

#### E. `remove()`

📘 Fungsi:
Menghapus elemen dari halaman.

📌 Contoh:

```
<p id="hapus-aku">Saya akan dihapus</p>
```
```
const el = document.getElementById("hapus-aku");
el.remove();
```
➡️ Elemen itu akan hilang dari DOM.

# 📑🖋️ Kesimpulan 

| Fungsi            | Kegunaan                              |
| ----------------- | ------------------------------------- |
| `textContent`     | Ubah teks biasa (tanpa tag HTML)      |
| `innerHTML`       | Ubah isi elemen + bisa pakai tag HTML |
| `createElement()` | Buat elemen baru                      |
| `appendChild()`   | Tempelkan elemen ke dalam elemen lain |
| `remove()`        | Hapus elemen dari halaman             |
