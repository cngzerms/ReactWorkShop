# Proje Adı

Bu projede React ve json-server kullanarak bir web uygulaması geliştirdik. Bu proje, kullanıcı arayüzünde API verilerini gösteren temel bir uygulamadır. UI kütüphanesi olarak Reactstrap kullanılmış ve bildirimler için AlertifyJS paketi entegre edilmiştir.

## Başlangıç

Proje dosyalarını bilgisayarınıza klonlayın veya indirin. Daha sonra aşağıdaki adımları izleyerek projeyi çalıştırabilirsiniz.

### Adım 1: API Dizini

Öncelikle, API verilerini sunmak için json-server'ı çalıştırmamız gerekiyor.

1. Terminal veya komut istemcisini açın.
2. Proje dizininde `api` klasörüne gidin.
   ```bash
   cd api
3. json-server'ı başlatmak için aşağıdaki komutu çalıştırın:
   ```bash
    json-server --watch db.json

Bu komut ile 'http://localhost:3000' adresinde API içerisindeki veriler görüntülenebilir.

### Adım 2: Uygulama Dizini

Şimdi, React uygulamasını çalıştırmak için gerekli adımları takip edelim.

1. Yeni bir terminal veya komut istemcisi penceresi açın (veya mevcut olanı kullanın).
2. Proje dizininde `basic ` klasörüne gidin.
   ```bash
   cd basic 
3. Gerekli paketleri yüklemek için aşağıdaki komutu çalıştırın:
   ```bash
    npm install
4. Uygulamayı başlatmak için aşağıdaki komutu çalıştırın:
    ```bash
    npm start

Bu komut sonrasında terminalde gelen bildirimi 'Y' harfi ile cevaplandırıp uygulamayı farklı bir portta başlatmış olacaksınız.