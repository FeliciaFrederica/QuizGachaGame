# Penjelasan Endpoint - GachaGame

Base URL: http://localhost:5000/api

## Auth Endpoints

### 1. Register

1. POST /auth/register
2. Request Body:
   {  
    "email": "user@mail.com",
   "password": "123456",
   "fullName": "Felicia"
   }
3. Response:
   {
   "email": "user@mail.com",
   "full_name": "Felicia"
   }

### 2. Login

1. POST /auth/login
2. Request Body:
   {
   "email": "user@mail.com",
   "password": "123456"
   }
3. Response:
   {
   "user": {
   "id": "abc123",
   "email": "user@mail.com",
   "role": "user"
   },
   "token": "jwt_token_here"
   }

## Gacha Endpoints

### 1. Play Gacha

1. POST /gacha - melakukan gacha untuk user.
2. Headers:
   Authorization: Bearer <token>
3. Response: {"status": "WIN", "prize": "Pulsa Rp50.000"} atau {"status": "LOSE", "prize": "null"}

### 2. Gacha History

1. GET /gacha/history - melihat histori gacha dari user tertentu.
2. Headers:
   Authorization: Bearer <token>
3. Response:
   [ { "status": "WIN", "prizeName": "Pulsa Rp50.000", "createdAt": "2026-04-10T10:00:00Z" }, { "status": "LOSE", "prizeName": null, "createdAt": "2026-04-10T09:55:00Z" } ]

## Prize Endpoints

### 1. Available Prizes

1. GET /prize - menampilkan daftar hadiah yang masih tersedia (remainingQuota > 0).
2. Headers:
   Authorization: Bearer <token>
3. Response:
   [ { "name": "Pulsa Rp50.000", "remainingQuota": 495 } ]

### 2. All Prizes

1. GET /prize/all - menampilkan semua hadiah beserta sisa kuota, termasuk yang sudah habis.
2. Response:
   [ { "name": "Emas 10 gram", "remainingQuota": 0 }, { "name": "Smartphone X", "remainingQuota": 4 } ]

## User Endpoints

### 1. All Users (Admin Only)

1. GET /users - menampilkan daftar semua user.
2. Headers:
   Authorization: Bearer <token (admin)>

### 2. Get User Detail

1. GET /users/me - menampilkan detail user.
2. Headers:
   Authorization: Bearer <token>

### 2. Update User

1. PUT /users/me - mengupdate data email dan fullname user yang sedang login.
2. Headers:
   Authorization: Bearer <token>
3. Body:
   {
   "email": "example@mail.com",
   "fullName": "New Name"
   }

### 3. Change Password

1. PUT /users/me/change-password - mengubah password user.
2. Headers:
   Authorization: Bearer <token>
3. Body:
   {
   "old_password": "passwordlama",
   "new_password": "passwordbaru123",
   "confirm_new_password": "passwordbaru123"
   }

### 4. Delete User (admin only)

1. DELETE /users/:id - menghapus user.
2. Headers:
   Authorization: Bearer <token>
