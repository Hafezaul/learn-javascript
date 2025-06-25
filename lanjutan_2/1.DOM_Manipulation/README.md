# Apa Itu DOM Manipulation?

DOM (Document Object Model) adalah representasi struktur halaman HTML dalam bentuk pohon (tree).
DOM Manipulation artinya: kamu mengakses dan memodifikasi elemen HTML menggunakan JavaScript.

### Materi Utama di DOM Manipulation

1. Mengenali dan Mengakses Elemen HTML

Gunakan JavaScript untuk memilih elemen HTML.

| Fungsi               | Contoh                               | Keterangan                         |
| -------------------- | ------------------------------------ | ---------------------------------- |
| `getElementById()`   | `document.getElementById("judul")`   | Ambil elemen berdasarkan ID        |
| `querySelector()`    | `document.querySelector(".card")`    | Ambil satu elemen dengan selector  |
| `querySelectorAll()` | `document.querySelectorAll(".item")` | Ambil semua elemen dengan selector |

2. Mengubah Isi dan Struktur Elemen

Ubah teks, HTML, atau tambahkan elemen baru.

| Fungsi            | Contoh                          | Keterangan                  |
| ----------------- | ------------------------------- | --------------------------- |
| `textContent`     | `el.textContent = "Halo"`       | Ubah teks biasa             |
| `innerHTML`       | `el.innerHTML = "<b>Hai</b>"`   | Bisa pakai tag HTML         |
| `createElement()` | `document.createElement("div")` | Buat elemen baru            |
| `appendChild()`   | `parent.appendChild(child)`     | Tambahkan elemen ke halaman |
| `remove()`        | `element.remove()`              | Hapus elemen                |

3. Mengubah Style dan Class

Modifikasi tampilan dengan JS.

| Fungsi               | Contoh                        | Keterangan   |
| -------------------- | ----------------------------- | ------------ |
| `style`              | `el.style.color = "red"`      | Ubah warna   |
| `classList.add()`    | `el.classList.add("active")`  | Tambah class |
| `classList.remove()` | `el.classList.remove("hide")` | Hapus class  |
| `classList.toggle()` | `el.classList.toggle("dark")` | Switch class |

4. Menangani Event (Interaksi User)

Respons terhadap klik, input, submit, dsb.

| Fungsi               | Contoh                                       | Keterangan                       |
| -------------------- | -------------------------------------------- | -------------------------------- |
| `addEventListener()` | `btn.addEventListener("click", () => {...})` | Jalankan kode saat event terjadi |
| Event `click`        | Saat tombol diklik                           |                                  |
| Event `input`        | Saat user mengetik                           |                                  |
| Event `submit`       | Saat form dikirim                            |                                  |
| `preventDefault()`   | Mencegah perilaku default form/link          |                                  |

5. Bekerja dengan Form

Ambil nilai input, validasi, dan reset form.

| Fungsi          | Contoh                    | Keterangan           |
| --------------- | ------------------------- | -------------------- |
| `input.value`   | `nama.value`              | Ambil isi dari input |
| `form.reset()`  | Reset form                |                      |
| Validasi manual | `if (input.value === "")` | Cek input kosong     |


6. Manipulasi Atribut dan Data

Baca atau ubah atribut HTML.

| Fungsi           | Contoh                         | Keterangan            |
| ---------------- | ------------------------------ | --------------------- |
| `getAttribute()` | `img.getAttribute("src")`      | Ambil atribut         |
| `setAttribute()` | `el.setAttribute("href", "#")` | Set atribut           |
| `dataset`        | `el.dataset.id`                | Ambil `data-id="123"` |
