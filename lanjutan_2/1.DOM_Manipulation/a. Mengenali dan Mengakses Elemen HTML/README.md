## 1. Mengenali dan Mengakses Elemen HTML 

#### A. `getElementById()`

📌 Kegunaan:
Mengambil elemen HTML berdasarkan atribut id.

Contoh 

```
<!--HTML Code-->

    <h1 id="myHeading1"></h1>

```

```
// Javascript Sintaks

let a = document.getElementById("myHeading1");

if (a) {
    console.log("Test Hello");
}
// Output : Test Hello
```

#### B. `querySelector()`

📌 Kegunaan:

Mengambil elemen pertama yang cocok dengan CSS selector.

```
<!--Contoh kode HTML-->

<div class="card">Ini kartu 1</div>
<div class="card">Ini kartu 2</div>


```

```
// Javascript Code

const kartuPertama = document.querySelector(".card");
console.log(kartuPertama.textContent); // Output: Ini kartu 1


```
Bisa pakai selector `#id` untuk mengambil elemen berdasarkan id, `.class` untuk mengambil elemen berdasarkan class, `tag` untuk mengambil elemen berdasarkan tag, dan bahkan kombinasi (div.card, ul li, dll) 

#### C. ```querySelectorAll()```

📌 Kegunaan:

Mengambil semua elemen yang cocok dengan CSS selector.

```
<!--Kode HTML-->

<ul>
  <li class="item">Satu</li>
  <li class="item">Dua</li>
  <li class="item">Tiga</li>
</ul>

```

```
// Javascript Code 

const semuaItem = document.querySelectorAll(".item");
semuaItem.forEach(item => {
  console.log(item.textContent);
});

```