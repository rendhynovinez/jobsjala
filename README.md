
# Jobsjala App

Jobsjala adalah aplikasi mobile jobseeker yang memungkinkan pengguna untuk mencari pekerjaan, melamar pekerjaan, dan mengelola aplikasi pekerjaan mereka. Aplikasi ini dibangun menggunakan React Native.

## Fitur

- **Pencarian Pekerjaan:** Pengguna dapat mencari pekerjaan berdasarkan kata kunci, lokasi, dan kategori.
- **Detail Pekerjaan:** Pengguna dapat melihat detail pekerjaan termasuk deskripsi, persyaratan, dan informasi perusahaan.
- **Lamar Pekerjaan:** Pengguna dapat melamar pekerjaan langsung melalui aplikasi.
- **Pengelolaan Aplikasi:** Pengguna dapat melacak status aplikasi pekerjaan mereka.
- **Profil Pengguna:** Pengguna dapat membuat dan mengedit profil mereka.

## Persyaratan

- Node.js
- npm atau yarn
- React Native CLI
- Emulator Android atau perangkat iOS

## Instalasi

1. Clone repository ini:

    ```bash
    git clone https://github.com/username/jobsjala-android.git
    ```

2. Masuk ke direktori proyek:

    ```bash
    cd jobsjala-android
    ```

3. Instal dependensi:

    ```bash
    npm install
    ```

    atau

    ```bash
    yarn install
    ```

4. Jalankan aplikasi:

    Untuk Android:

    ```bash
    npx react-native run-android
    ```

    Untuk iOS:

    ```bash
    npx react-native run-ios
    ```

## Struktur Proyek

```plaintext
.
├── android                     # Proyek Android
├── ios                         # Proyek iOS
├── src                         # Sumber kode aplikasi
│   ├── components              # Komponen UI
│   ├── screens                 # Layar aplikasi
│   ├── navigation              # Navigasi aplikasi
│   ├── services                # Layanan API
│   ├── utils                   # Utilitas umum
│   └── App.js                  # Root komponen
├── assets                      # Aset (gambar, ikon, dll.)
├── package.json                # Konfigurasi npm
└── README.md                   # Dokumentasi proyek
```

## Penggunaan

1. **Pencarian Pekerjaan:**

    Masuk ke tab "Cari Pekerjaan", masukkan kata kunci, pilih lokasi, dan kategori lalu klik tombol cari.

2. **Lihat Detail Pekerjaan:**

    Klik pada pekerjaan yang ingin dilihat untuk melihat detail lengkapnya.

3. **Lamar Pekerjaan:**

    Klik tombol "Lamar" di halaman detail pekerjaan, lengkapi formulir lamaran dan kirim.

4. **Kelola Aplikasi:**

    Masuk ke tab "Aplikasi Saya" untuk melihat dan mengelola status aplikasi pekerjaan Anda.

5. **Edit Profil:**

    Masuk ke tab "Profil", klik tombol edit, dan perbarui informasi profil Anda.

## Kontribusi

Kontribusi sangat diterima! Silakan fork repository ini dan ajukan pull request dengan perubahan Anda.

1. Fork repository ini.
2. Buat branch fitur Anda: `git checkout -b fitur-anda`.
3. Commit perubahan Anda: `git commit -m 'Menambahkan fitur ABC'`.
4. Push ke branch tersebut: `git push origin fitur-anda`.
5. Buat pull request.

## Lisensi

Proyek ini dilisensikan di bawah lisensi MIT. Lihat file [LICENSE](LICENSE) untuk informasi lebih lanjut.
