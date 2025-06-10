GlobeTrotter
GlobeTrotter, bir ülke adı girerek o ülkenin para birimi, nüfusu, resmi dili, bayrağı ve komşu ülkeleri hakkında bilgi almanızı sağlayan interaktif bir coğrafya keşif aracıdır. Komşu ülkelere tıklayarak bir dünya turuna çıkabilir, coğrafi bilgileri eğlenceli bir şekilde keşfedebilirsiniz!
Özellikler

Ülke Bilgileri: Ülke adı girerek para birimi, nüfus, resmi dil ve bayrak gibi temel bilgileri öğrenin.
Komşu Ülkeler: Seçilen ülkenin komşularını görün ve tıklayarak onların bilgilerine geçiş yapın.
Interaktif Deneyim: Kullanıcı dostu arayüz ile dünya turuna çıkın.
Responsive Tasarım: Bootstrap ile mobil ve masaüstü cihazlarda sorunsuz çalışır.

Kurulum
Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

Depoyu Klonlayın:
git clone https://github.com/kullaniciadi/GlobeTrotter.git


Proje Klasörüne Gidin:
cd GlobeTrotter


Bağımlılıkları Yükleyin:

Proje, harici bir bağımlılık gerektirmiyor. Ancak, Bootstrap'in çalışması için internet bağlantısı gerekli (CDN kullanılıyor).
Eğer yerel bir geliştirme sunucusu kullanmak isterseniz, Live Server (VS Code eklentisi) veya aşağıdaki gibi bir HTTP sunucusu başlatabilirsiniz:npx http-server




Projeyi Çalıştırın:

index.html dosyasını bir tarayıcıda açın veya yerel bir sunucu üzerinden erişin (örneğin, http://localhost:8080).



Kullanım

Ana sayfada ülke adı girmek için bir arama çubuğu bulacaksınız.
Ülke adını yazın (örneğin, "Türkiye") ve "Ara" butonuna tıklayın.
Ülkenin para birimi, nüfusu, resmi dili, bayrağı ve komşu ülkeleri görüntülenecek.
Komşu ülkelerden birine tıklayarak o ülkenin bilgilerine geçiş yapın ve dünya turunuza devam edin!

Kullanılan Teknolojiler

HTML5: Projenin temel yapısı için.
CSS3: Stil ve görsel düzenlemeler için.
Bootstrap 5: Responsive ve modern bir arayüz için.
JavaScript: Ülke bilgileri ve interaktif özelliklerin yönetimi için.
API: Ülke verileri için Rest Countries API kullanıldı (varsayım, eğer başka bir API kullanıyorsanız bunu güncelleyin).

İletişim
Sorularınız veya önerileriniz için GitHub Issues üzerinden iletişime geçebilirsiniz.
🌍 GlobeTrotter ile dünyayı keşfetmeye hazır mısınız?
