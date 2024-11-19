let platformEvent = {
  // 1. Array untuk menyimpan daftar event
  eventList: ["Music", "Coding", "Dance", "Quiz", "Science", "Mathematics"],

  // 2. Objek untuk menyimpan daftar peserta per event
  eventParticipants: {
    Music: [],
    Coding: [],
    Dance: [],
    Quiz: [],
    Science: [],
    Mathematics: [],
  },
};

// 1. Fungsi untuk menambahkan event baru
function tambahEvent(namaEvent) {
  if (!namaEvent) {
    console.log("Nama event dan nama peserta harus diisi!");
    return;
  }
  // cek dulu,ada nggk eventnya di eventlist
  if (platformEvent.eventList.includes(namaEvent)) {
    console.log("Event " + namaEvent + " Sudah tersedia");
    return "Event yang ada = " + platformEvent.eventList;
  }

  let konfirmasi = confirm("Apakah ingin membuat event baru ?");

  if (konfirmasi) {
    platformEvent.eventList.push(namaEvent);
    platformEvent.eventParticipants[namaEvent] = [];
    console.log("Event " + namaEvent + " berhasil ditambahkan");
    return "Event yang ada " + platformEvent.eventList;
  } else {
    console.log("Event tidak ditambahkan");
    return "Event yang ada " + platformEvent.eventList;
  }
}

// 2. Fungsi untuk mendaftar peserta ke event tertentu
function daftarPeserta(namaEvent, namaPeserta) {
  if (!namaEvent || !namaPeserta) {
    console.log("Nama event dan nama peserta wajib diisi!!");
    return;
  }

  if (platformEvent.eventList.includes(namaEvent)) {
    if (platformEvent.eventParticipants[namaEvent].includes(namaPeserta)) {
      console.log("Nama peserta sudah terdaftar!");
      return platformEvent.eventParticipants[namaEvent];
    } else if (!platformEvent.eventParticipants[namaEvent].includes(namaPeserta)) {
      let konfirmasi = confirm("Apakah anda ingin memasukkan nama peserta ke event ?");

      if (konfirmasi) {
        platformEvent.eventParticipants[namaEvent].push(namaPeserta);
        console.log("Nama peserta berhasil ditambahkan");
        return platformEvent.eventParticipants[namaEvent];
      } else {
        console.log("Nama peserta gagal ditambahkan");
      }
    }
  }

  let konfirmasi = confirm("Apa anda ingin membuat event baru ?");

  if (konfirmasi) {
    console.log("Nama event akan di tambahkan");
    platformEvent.eventList.push(namaEvent);
    platformEvent.eventParticipants[namaEvent] = [];
    platformEvent.eventParticipants[namaEvent].push(namaPeserta);
    return platformEvent.eventList;
  } else {
    console.log("Event " + namaEvent + " gagal ditambahkan");
  }
}

// 3. fungsi untuk membatalkan peserta dari event tertantu

function batalkanEvent(namaEvent) {
  if (!namaEvent) {
    console.log("Masukkan nama event");
    return;
  }

  if (!platformEvent.eventList.includes(namaEvent)) {
    console.log("Event tidak ditemukan!");
    return;
  }

  if (platformEvent.eventList.includes(namaEvent)) {
    let indexeventlists = platformEvent.eventList.indexOf(namaEvent);
    if (indexeventlists !== -1) {
      platformEvent.eventList.splice(indexeventlists, 1);
    }
    if ((indexeventparticipants = platformEvent.eventParticipants.hasOwnProperty(namaEvent))) {
      delete platformEvent.eventParticipants[namaEvent];
    }

    console.log("Event " + namaEvent + " berhasil dibatalkan");
    return "Event yang ada " + platformEvent.eventList;
  }
}

// 4. Fungsi untuk membatalkan peserta dari event tertentu
function batalkanPeserta(namaEvent, namaPeserta) {}

// 5. Fungsi untuk mengecek daftar peserta di event tertentu
function cekPeserta(namaEvent) {}

// 6. Fungsi untuk mengecek semua event dan jumlah peserta di setiap event
function cekEvent() {}
