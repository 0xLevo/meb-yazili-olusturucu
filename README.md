# MEB Uyumlu Klasik Yazılı Oluşturucu

Bu proje, 5-8. sınıflar için ders, dönem, yazılı no ve kazanım seçerek klasik yazılı oluşturan bir web uygulamasıdır.

## Özellikler

- Okul adı ve öğretmen adı alanları
- 5, 6, 7, 8. sınıf filtreleme
- Ders + dönem + yazılı no bazlı kapsamlı soru havuzu
- Kazanım bazlı soru seçimi
- Her kazanım için ayrı soru adedi belirleme
- Kazanıma tıklayınca sağ panelde soru havuzunu görüntüleme
- Soruları manuel işaretleyerek sınava dahil etme
- Siyah-beyaz çıktıya uygun geometri/veri görselleri
- Sorular arasında cevaplama boşlukları
- Yazılıyı yazdırma
- `.txt`, `Word (.doc)` ve PDF (tarayıcı üzerinden) çıktı alma

## Çalıştırma

Statik bir uygulamadır. Aşağıdaki komutla açabilirsiniz:

```bash
python3 -m http.server 4173
```

Sonra tarayıcıda `http://localhost:4173` adresine gidin.
