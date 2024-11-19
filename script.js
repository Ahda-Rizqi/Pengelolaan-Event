let platformEvent = {
  // 1. Array untuk menyimpan daftar event
  eventList: [],

  // 2. Objek untuk menyimpan daftar peserta per event
  eventParticipants: {},
};

// 1. Fungsi untuk menambahkan event baru
function tambahEvent(namaEvent) {
  if (!namaEvent) {
    console.log("Nama event dan nama peserta harus diisi!");
    return;
  }
  // Pseudocode:

  // 1.1 Cek apakah namaEvent sudah ada di eventList
  if (platformEvent.eventList.includes(namaEvent)) {
    // 1.2 Jika sudah ada, tampilkan pesan "Event sudah ada"
    console.log("Event " + namaEvent + " sudah ada di dalam eventlist!");
    return platformEvent.eventList;
  }
  // 1.3 Jika belum ada, tambahkan namaEvent ke eventList dan buat array kosong untuk eventParticipants[namaEvent]
  platformEvent.eventList.push(namaEvent);
  platformEvent.eventParticipants[namaEvent] = [];
  // 1.4 Tampilkan pesan bahwa event berhasil ditambahkan
  console.log("Event " + namaEvent + " berhasil ditambahkan");
  console.log("Event yang ada = " + platformEvent.eventList);
  return platformEvent.eventList;
}

// 2. Fungsi untuk mendaftar peserta ke event tertentu
function daftarPeserta(namaEvent, namaPeserta) {
  if (!namaEvent || !namaPeserta) {
    console.log("Nama event dan nama peserta harus diisi!");
    return;
  }

  // Cek apakah event ada
  if (platformEvent.eventList.includes(namaEvent)) {
    console.log("Event " + namaEvent + " sudah ada");

    // Cek apakah peserta sudah ada
    if (platformEvent.eventParticipants[namaEvent].includes(namaPeserta)) {
      console.log("Peserta " + namaPeserta + " sudah terdaftar di event " + namaEvent);
      return platformEvent; // Kembalikan daftar peserta event
    }

    // Tambahkan peserta jika belum ada
    platformEvent.eventParticipants[namaEvent].push(namaPeserta);
    console.log("Peserta " + namaPeserta + " berhasil ditambahkan ke event " + namaEvent);

    console.log("Peserta yang terdaftar sekarang di event " + namaEvent + ": " + platformEvent.eventParticipants[namaEvent]);
    return platformEvent.eventParticipants[namaEvent]; // Kembalikan daftar peserta yang sudah terdaftar
  }

  // Jika event tidak ditemukan, buat event baru dan tambahkan peserta

  console.log("Event " + namaEvent + " tidak ditemukan, membuat event baru!");
  platformEvent.eventList.push(namaEvent);
  platformEvent.eventParticipants[namaEvent] = [];
  platformEvent.eventParticipants[namaEvent].push(namaPeserta);
  console.log("Event " + namaEvent + " dan peserta " + namaPeserta + " berhasil ditambahkan");

  console.log("Peserta yang terdaftar di event baru " + namaEvent + ": " + platformEvent.eventParticipants[namaEvent]);
  // Kembalikan daftar event setelah penambahan
  return platformEvent.eventList;
}

// 3. Fungsi untuk membatalkan peserta dari event tertentu
function batalkanPeserta(namaEvent, namaPeserta) {
  if (!namaEvent || !namaPeserta) {
    console.log("Nama event dan nama peserta harus diisi!");
    return;
  }

  // 1. Cek apakah namaEvent ada di eventList
  if (!platformEvent.eventList.includes(namaEvent)) {
    // 2. Jika namaEvent tidak ditemukan, tampilkan "Event tidak ditemukan"
    console.log("Event tidak ditemukan!");
    return; // Cukup return di sini untuk keluar dari fungsi jika event tidak ada
  }

  // 3. Cek apakah peserta ada di eventParticipants[namaEvent]
  if (!platformEvent.eventParticipants[namaEvent].includes(namaPeserta)) {
    console.log("Peserta tidak ditemukan!");
    return; // Cukup return di sini untuk keluar dari fungsi jika peserta tidak ada
  }

  // 4. Jika namaPeserta ditemukan, hapus peserta dari daftar peserta
  let index = platformEvent.eventParticipants[namaEvent].indexOf(namaPeserta);
  platformEvent.eventParticipants[namaEvent].splice(index, 1);
  console.log("Peserta " + namaPeserta + " berhasil dibatalkan dari event " + namaEvent);
  return platformEvent.eventParticipants[namaEvent];
}

// 4. Fungsi untuk mengecek daftar peserta di event tertentu
function cekPeserta(namaEvent) {
  // 1. Cek apakah namaEvent ada di eventList
  if (!platformEvent.eventList.includes(namaEvent)) {
    console.log("Event tidak ditemukan!");
    return ;
  }

  // Pastikan array peserta ada, meskipun kosong
  let peserta = platformEvent.eventParticipants[namaEvent] || [];

  // 2. Cek apakah ada peserta di dalam event
  if (peserta.length > 0) {
    console.log("Peserta yang ada di event " + namaEvent + ": " + peserta.join(", "));
  } else {
    console.log("Tidak ada peserta terdaftar di event " + namaEvent);
  }

  return platformEvent.eventParticipants[namaEvent];
}

// 5. Fungsi untuk mengecek semua event dan jumlah peserta di setiap event
function cekEvent() {
  // Pseudocode:
  // 5.1 Loop melalui setiap event dalam eventList
  // 5.2 Untuk setiap event, tampilkan nama event dan jumlah peserta yang terdaftar
}
