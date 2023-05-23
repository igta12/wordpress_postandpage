// Class parent untuk representasi post pada WordPress
class WP_Post {
  constructor(title, content) {
    this._title = title; // Atribut title dengan akses private
    this._content = content; // Atribut content dengan akses private
  }

  getTitle() {
    return this._title; // Getter untuk mengakses atribut title secara aman

  }

  getContent() {
    return this._content; // Getter untuk mengakses atribut content secara aman
  }

  display() {
    console.log(`Title: ${this._title}`);
    console.log(`Content: ${this._content}`);
  }
}

// Class child yang mewarisi dari WP_Post
class WP_Page extends WP_Post {
  constructor(title, content, template) {
    super(title, content);
    this._template = template; // Atribut template dengan akses private
  }

  getTemplate() {
    return this._template; // Getter untuk mengakses atribut template secara aman
  }

  display() {
    console.log(`Title (Page): ${this._title}`);
    console.log(`Content (Page): ${this._content}`);
    console.log(`Template: ${this._template}`);
  }

  static getDefaultTemplate() {
    return "default-template";
  }
}

// Membuat objek post menggunakan class WP_Post
const post = new WP_Post("Hello World", "Ini adalah contoh post pertama.");

// Membuat objek page menggunakan class WP_Page
const page = new WP_Page(
  "About Us",
  "Ini adalah halaman tentang kami",
  "about-template"
);

// Memanggil method display() dengan polimorfisme
post.display(); // Menampilkan informasi post
page.display(); // Menampilkan informasi page

// Menggunakan polimorfisme untuk mengakses method getTitle() dan getContent()
console.log(post.getTitle()); // Mengakses method getTitle() dari kelas WP_Post
console.log(page.getTitle()); // Mengakses method getTitle() dari kelas WP_Page

console.log(post.getContent()); // Mengakses method getContent() dari kelas WP_Post
console.log(page.getContent()); // Mengakses method getContent() dari kelas WP_Page