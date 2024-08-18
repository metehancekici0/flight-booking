# Flight Booking

Schiphol havalimanının "Public Flight API"'ı kullanılarak yolcu uçuş seferlerinin listelenmesi ve rezerve edilebildiği bir uygulamadır. 
Uygulamayı çalıştırmak için öncelikle ["https://www.schiphol.nl/en/developer-center/"](https://www.schiphol.nl/en/developer-center/) adresinden kayıt olup APP_ID ve APP_KEY elde etmelisiniz.
Daha sonra mongoDB bağlantısı için bir hesap oluşturup MONGO_URI bağlantı adresinizi oluşturmalısınız. 
Son olarak server klasörünün içerisine aşağıdaki gibi bir ".env" dosyası oluşturmalısınız. Hepsi bu kadar!

It is an application where passenger flight schedules can be listed and booked using the ‘Public Flight API’ of Schiphol airport. 
To run the application, you must first register at [‘https://www.schiphol.nl/en/developer-center/’](https://www.schiphol.nl/en/developer-center/) and obtain APP_ID and APP_KEY.
You must then create an account for the mongoDB connection and create your MONGO_URI connection address. 
Finally, you should create an ‘.env’ file in the server folder as follows. That's all!

```js
MONGO_URI=YOUR_MONGO_URI
PORT=3000
APP_ID=YOUR_APP_ID
APP_KEY=YOUR_APP_KEY
```

Projede kullanılan teknolojiler / Technologies used in the project

- React (Vite)
- TailwindCSS
- Redux (State Management)
- Responsive Design
- Node.js (Express)
- MongoDB (Mongoose)

React Paketleri / React Packages

- react redux@9.1.2
- redux toolkit@2.2.7
- axios@1.7.3
- concurrently@8.2.2
- react-router-dom@6.26.0
- react-toastify@10.0.5

Node.js Paketleri / Node.js Packages

- axios@1.7.4,
- cors@2.8.5
- dotenv@16.4.5
- express@4.19.2
- mongoose@8.5.2

## Ekran Görüntüleri / ScreenShots
![image](https://github.com/user-attachments/assets/f2c28c62-e770-4927-b41d-4e270419bce4)
![image](https://github.com/user-attachments/assets/74759657-8b83-4f41-89fe-1a6df427148b)

