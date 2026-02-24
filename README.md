 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
new file mode 100644
index 0000000000000000000000000000000000000000..630077b34950556c30c99f2e071dfc76c7dac880
--- /dev/null
+++ b/README.md
@@ -0,0 +1,23 @@
+# MEB Uyumlu Klasik Yazılı Oluşturucu
+
+Bu proje, 5-8. sınıflar için ders, dönem, yazılı no ve kazanım seçerek klasik yazılı oluşturan bir web uygulamasıdır.
+
+## Özellikler
+
+- Okul adı ve öğretmen adı alanları
+- 5, 6, 7, 8. sınıf filtreleme
+- Ders + dönem + yazılı no bazlı kapsamlı soru havuzu
+- Kazanım bazlı soru seçimi
+- Seçili kazanımlara göre dengeli ve hikâyesel (senaryolu) soru dağıtımı
+- Yazılıyı yazdırma
+- Yazılı metnini `.txt` olarak indirme
+
+## Çalıştırma
+
+Statik bir uygulamadır. Aşağıdaki komutla açabilirsiniz:
+
+```bash
+python3 -m http.server 4173
+```
+
+Sonra tarayıcıda `http://localhost:4173` adresine gidin.
 
EOF
)
