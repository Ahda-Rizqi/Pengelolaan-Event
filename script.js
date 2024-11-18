let platformEvent = {
  // 1. Array untuk menyimpan daftar event
  eventList: [],

  // 2. Objek untuk menyimpan daftar peserta per event
  eventParticipants: {},
};

// 1. Fungsi untuk menambahkan event baru
function tambahEvent(namaEvent) {
  // Pseudocode:
  for (let i = 0; i < platformEvent.eventList.length; i++) {
    // 1.1 Cek apakah namaEvent sudah ada di eventList
    if (namaEvent == platformEvent.eventList[i]) {
      // 1.2 Jika sudah ada, tampilkan pesan "Event sudah ada"
      console.log("Event " + namaEvent + " sudah ada di dalam eventlist!");
      return platformEvent.eventList;
    }
  }
  // 1.3 Jika belum ada, tambahkan namaEvent ke eventList dan buat array kosong untuk eventParticipants[namaEvent]
  platformEvent.eventList.push(namaEvent);
  platformEvent.eventParticipants[namaEvent] = [];
  // 1.4 Tampilkan pesan bahwa event berhasil ditambahkan
  console.log("Event " + namaEvent + " berhasil ditambahkan");
  return platformEvent.eventList;
}

// 2. Fungsi untuk mendaftar peserta ke event tertentu
function daftarPeserta(namaEvent, namaPeserta) {
  if (!namaEvent || !namaPeserta) {
    console.log("Nama buku dan nama peminjam harus diisi!!");
    return perpus;
  }

  let eventFound = false;

  // Cek apakah event ada
  for (let i = 0; i < platformEvent.eventList.length; i++) {
    if (namaEvent === platformEvent.eventList[i]) {
      eventFound = true;
      console.log("Event " + namaEvent + " sudah ada");

      // Cek apakah peserta sudah ada
      if (platformEvent.eventParticipants[namaEvent].includes(namaPeserta)) {
        console.log("Peserta " + namaPeserta + " sudah terdaftar di event " + namaEvent);
        return platformEvent.eventParticipants[namaEvent]; // Kembalikan daftar peserta event
      }

      // Tambahkan peserta jika belum ada
      platformEvent.eventParticipants[namaEvent].push(namaPeserta);
      console.log("Peserta " + namaPeserta + " berhasil ditambahkan ke event " + namaEvent);
      return platformEvent.eventParticipants[namaEvent]; // Kembalikan daftar peserta yang sudah terdaftar
    }
  }

  // Jika event tidak ditemukan, buat event baru dan tambahkan peserta
  if (!eventFound) {
    console.log("Event " + namaEvent + " tidak ditemukan, membuat event baru!");
    platformEvent.eventList.push(namaEvent);
    platformEvent.eventParticipants[namaEvent] = [namaPeserta];
    console.log("Event " + namaEvent + " dan peserta " + namaPeserta + " berhasil ditambahkan");

    // Kembalikan daftar event setelah penambahan
    return platformEvent.eventList;
  }
}

// 3. Fungsi untuk membatalkan peserta dari event tertentu
function batalkanPeserta(namaEvent, namaPeserta) {
  // Pseudocode:
  // 3.1 Cek apakah namaEvent ada di eventList
  // 3.2 Jika event tidak ditemukan, tampilkan pesan "Event tidak ditemukan"
  // 3.3 Cari namaPeserta dalam eventParticipants[namaEvent]
  // 3.4 Jika peserta ditemukan, hapus peserta dari eventParticipants[namaEvent]
  // 3.5 Tampilkan pesan bahwa peserta berhasil dibatalkan
  // 3.6 Jika peserta tidak ditemukan, tampilkan pesan "Peserta tidak ditemukan"
}

// 4. Fungsi untuk mengecek daftar peserta di event tertentu
function cekPeserta(namaEvent) {
  // Pseudocode:
  // 4.1 Cek apakah namaEvent ada di eventList
  // 4.2 Jika event tidak ditemukan, tampilkan pesan "Event tidak ditemukan"
  // 4.3 Jika event ditemukan, tampilkan daftar peserta yang terdaftar di eventParticipants[namaEvent]
}

// 5. Fungsi untuk mengecek semua event dan jumlah peserta di setiap event
function cekEvent() {
  // Pseudocode:
  // 5.1 Loop melalui setiap event dalam eventList
  // 5.2 Untuk setiap event, tampilkan nama event dan jumlah peserta yang terdaftar
}
