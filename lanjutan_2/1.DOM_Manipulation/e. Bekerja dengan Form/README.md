## 6. Bekerja dengan Form

Pada DOM kali ini akan membahas mengenai bagaimana mengolah input form dan validasi form. 

Dalam mengolah input pada form ada hal-hal yang diperhatikan seperti : 

- Kondisi user yang terpenuhi
- Kondisi user yang tidak terpenuhi
- Reset form

#### A. `input.value`

Untuk mengambil isi input dari user.
```
const nama = document.getElementById("nama");
console.log(nama.value); // Menampilkan teks yang diketik user
```

#### B. `form.reset()`

Untuk mengosongkan form kembali ke keadaan awal
Cocok dipakai setelah data berhasil dikirim.
```
const form = document.getElementById("form-daftar");
form.reset(); // Semua input akan dikosongkan
```

#### C. `Validasi Manual`

Mengecek apakah user sudah mengisi input atau belum.

```
if (nama.value === "") {
  alert("Nama harus diisi!");
}
```

# Inti bekerja dengan form 

| Kode                | Fungsi                        |
| ------------------- | ----------------------------- |
| `input.value`       | Ambil isi input dari user     |
| `form.reset()`      | Kosongkan semua input         |
| `if (input === "")` | Cek apakah input masih kosong |
