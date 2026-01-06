# React Quiz App (Vite)

Bu proje, React ve Vite kullanılarak geliştirilmiş süreli bir quiz (test) uygulamasıdır.  
Proje, verilen isterler doğrultusunda kullanıcıya zaman sınırlı sorular sunar ve test sonunda detaylı sonuç ekranı gösterir.

---

## 🚀 Canlı Demo
> Netlify üzerinden yayınlanmaktadır.


👉 [Canlı Siteyi Görüntüle](https://unrivaled-croquembouche-1d7428.netlify.app)


---

## 📌 Proje Özellikleri

- React + Vite kullanılarak geliştirilmiştir
- Giriş ekranında **“Teste Başla”** butonu bulunmaktadır
- Toplam **10 sorudan** oluşmaktadır
- Her soru **maksimum 30 saniye** ekranda kalır
- İlk **4 saniye** cevap şıkları gizlidir
- Kullanıcı bir şık seçtiğinde veya süre dolduğunda otomatik olarak sonraki soruya geçilir
- Önceki sorulara geri dönülemez
- Test sonunda:
  - Doğru sayısı
  - Yanlış sayısı
  - Boş bırakılan soru sayısı
  kullanıcıya gösterilir
- Soru görselleri kullanılmıştır
- SPA (Single Page Application) yapısına uygundur

---

## 🛠 Kullanılan Teknolojiler

- React
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3
- Netlify (Deploy)

---

## 📂 Proje Klasör Yapısı

```text
my-quiz-app/
├── public/
│   ├── assets/
│   │   ├── cin-seddi.jpg
│   │   ├── pamuk.jpg
│   │   └── ...
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── Intro.jsx
│   │   ├── Question.jsx
│   │   └── Result.jsx
│   ├── data/
│   │   └── questions.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md


⚙️ Kurulum ve Çalıştırma
Projeyi yerel ortamda çalıştırmak için:

bash
Kodu kopyala
npm install
npm run dev
Tarayıcıda açmak için:

dts
Kodu kopyala
http://localhost:5173
🏗 Build Alma
Production build almak için:

bash
Kodu kopyala
npm run build
Bu işlem sonunda dist klasörü oluşturulur.
Bu klasör Netlify tarafından otomatik olarak üretilir, GitHub reposuna eklenmez.

🌍 Netlify Deploy Ayarları
GitHub üzerinden Netlify deploy ayarları:

Build Command: npm run build

Publish Directory: dist

SPA yönlendirmesi için kullanılan _redirects dosyası:

text
Kodu kopyala
/*    /index.html   200
📊 Test Mantığı
Cevap verilmezse soru boş olarak kaydedilir

Yanlış cevap verilse bile test devam eder

Her soru yalnızca bir kez cevaplanabilir

Zaman aşımı ve tıklama çakışmaları locked state ile kontrol altına alınmıştır

👤 Geliştirici
Beyzanur Çimen

React & Frontend Geliştirme Projesi

📄 Lisans
Bu proje eğitim amaçlı geliştirilmiştir.
