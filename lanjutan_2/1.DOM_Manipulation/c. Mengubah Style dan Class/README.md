## 3. Mengubah Style dan Class dengan JavaScript

Materi ini penting banget buat bikin tampilan dinamis:
- ✅ Mode gelap
- ✅ Ganti warna saat hover/click
- ✅ Menyembunyikan atau menampilkan elemen
- ✅ Animasi pakai CSS class


#### A. Ubah Gaya Langsung dengan `style`

📘 Contoh: 

```
<p id="teks">Ini paragraf</p>
```
```
const teks = document.getElementById("teks");
teks.style.color = "red";
teks.style.fontSize = "20px";
```

`style` hanya untuk modifikasi langsung properti CSS. Harus dalam format camelCase:
`background-color` → `backgroundColor`

#### B. Menambahkan Class dengan `classList.add()`

📘 Contoh:
```
<p id="judul" class="judul-default">Halo</p>
```

```
const el = document.getElementById("judul");
el.classList.add("judul-merah");
```
Tambahkan class CSS baru tanpa menghapus class yang lain.

#### C. Menghapus Class dengan `classList.remove()`

📘 Contoh:

```
el.classList.remove("judul-default");
```
Menghilangkan class tertentu dari elemen.

#### D. Toggle Class dengan `classList.toggle()`

📘 Contoh:

```
el.classList.toggle("dark-mode");
```

- Jika class belum ada → ditambahkan
- Jika class sudah ada → dihapus

Cocok untuk switch mode malam, animasi klik, dll.

# Kesimpulan 

| Fungsi                  | Kegunaan                             |
| ----------------------- | ------------------------------------ |
| `el.style.property`     | Ubah gaya langsung                   |
| `el.classList.add()`    | Tambahkan class CSS                  |
| `el.classList.remove()` | Hapus class tertentu                 |
| `el.classList.toggle()` | Nyalakan/matikan class (mode switch) |
