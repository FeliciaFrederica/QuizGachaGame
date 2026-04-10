# Penjelasan Endpoint - GachaGame

Base URL: http://localhost:5000/api

## Gacha Endpoints

### 1. Play Gacha

1. POST /gacha - melakukan gacha untuk user.
2. Request Body: {"userId": "U001"}
3. Response: {"status": "WIN", "prize": "Pulsa Rp50.000"} atau {"status": "LOSE", "prize": "null"}

### 2. Gacha History

1. GET /gacha/history/:userId - melihat histori gacha dari user tertentu.
2. Headers:
   x-user-id: userId
3. Response:
   [ { "status": "WIN", "prizeName": "Pulsa Rp50.000", "createdAt": "2026-04-10T10:00:00Z" }, { "status": "LOSE", "prizeName": null, "createdAt": "2026-04-10T09:55:00Z" } ]

## Prize Endpoints

### 1. Available Prizes

1. GET /prize - menampilkan daftar hadiah yang masih tersedia (remainingQuota > 0).
2. Response:
   [ { "name": "Pulsa Rp50.000", "remainingQuota": 495 } ]

### 2. All Prizes

1. GET /prize/all - menampilkan semua hadiah beserta sisa kuota, termasuk yang sudah habis.
2. Response:
   [ { "name": "Emas 10 gram", "remainingQuota": 0 }, { "name": "Smartphone X", "remainingQuota": 4 } ]

### 3. Create Prize (Admin Only)

1. POST /prize - menambahkan hadiah baru (hanya dapat diakses oleh admin).
2. Headers:
   x-api-key: admin123
3. Request Body:
   { "name": "Laptop", "quota": 10 }
4. Response:
   { "name": "Laptop", "quota": 10, "remainingQuota": 10 }

## User Endpoints

### 1. All Users

1. GET /users - menampilkan daftar semua user
2. Response:
   [{"_id":"69d79018d660bf6af06bcb17","email":"andi@example.com","password":"$2b$16$NoJy1exzq6tR5RJTbbmFw.JwYCl8x119HZXRx1oHKVf8xcHZpQ.pq","fullName":"Andi Setiawan","__v":0}]

### 2. Create User

1. POST /users - membuat user baru.
2. Request Body:
   { "email": "user@mail.com", "password": "123456", "full_name": "Felicia", "confirm_password": "123456" }

### 3. Get User Detail

1. GET /users/:id - menampilkan detail user berdasarkan ID.

### 4. Update User

1. PUT /users/:id - mengupdate data user.

### 5. Change Password

1. PUT /users/:id/change-pass - mengubah password user.

### 6. Delete User

1. DELETE /users/:id - menghapus user.
