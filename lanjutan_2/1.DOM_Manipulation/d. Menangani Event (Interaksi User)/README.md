## 4. Menangani Event (Interaksi User)

### Keyword : 
> btn.addEventListener(' what i do? ' () => {Logic});

what i do? adalah kondisi apa saja yang akan dilakukan oleh browser ketika user melakukan aktivitas pada laman tersebut. 
Kondisi apa saja yang cocok digunakan? 

| Kapan Pakai Event Apa?            | Gunakan Event      |
| --------------------------------- | ------------------ |
| Saat klik tombol                  | `click`            |
| Saat user mengetik                | `input`            |
| Saat kirim form (inputan dikirim) | `submit`           |
| Untuk mencegah reload, redirect   | `preventDefault()` |


#### A. `click`

Dipicu saat user mengklik tombol, link, gambar, dll.

```
button.addEventListener("click", () => {
  console.log("Tombol diklik");
});
```

#### B. `input`

Dipicu saat user mengetik di form input/textarea (real-time).
```
input.addEventListener("input", () => {
  console.log("User mengetik...");
});
```

#### C. `submit`

Dipicu saat form dikirim (biasanya dengan tombol submit).
```
form.addEventListener("submit", (e) => {
  e.preventDefault(); // penting!
  console.log("Form dikirim!");
});
```
 Kenapa pakai `preventDefault()`?
Supaya form tidak reload halaman, dan kamu bisa tangani data pakai JavaScript.