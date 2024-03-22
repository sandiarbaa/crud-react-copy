import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormUpdate = ({ prefix }) => {
  const { nim } = useParams();
  const [inputValue, setInputValue] = useState({});

  // mengambil data mahasiswa yg mendapatkan nim dari url, yg nim nya sama dengan nim di localstorage
  // lalu ambil mahasiswa tersebut untuk di tampilkan di sebagai value di inputan formnya.
  useEffect(() => {
    const mahasiswa = JSON.parse(localStorage.getItem("mahasiswa"));
    const mhs = mahasiswa.find((mhs) => mhs.nim === nim);
    setInputValue(mhs || {});
  }, [nim]);

  const updateData = (e) => {
    e.preventDefault();

    // mengambil field untuk inputan dari form edit
    const { nama, nim, email } = e.target;

    // ambil data mahasiswa yg sudah ada dari localstorage
    let mahasiswa = JSON.parse(localStorage.getItem("mahasiswa"));

    // Cari indeks data yang akan diupdate
    const index = mahasiswa.findIndex((mhs) => mhs.nim === nim.value);

    if (index !== -1) {
      // Perbarui data pada indeks yang sesuai
      mahasiswa[index] = {
        nama: nama.value,
        nim: nim.value,
        email: email.value,
      };

      localStorage.setItem("mahasiswa", JSON.stringify(mahasiswa));
      alert("Data berhasil diupdate!");
      window.location.href = "/dashboard";
    } else {
      alert("Data tidak ditemukan!");
    }
  };

  return (
    <form onSubmit={updateData} className="relative">
      <InputForm
        prefix={prefix}
        type="text"
        name="nama"
        judul="Nama"
        value={inputValue.nama}
      />
      <InputForm
        prefix={prefix}
        type="text"
        name="nim"
        judul="NIM"
        value={inputValue.nim}
        readOnly={true}
      />
      <span className="text-xs text-slate-500 text-center absolute top-[137px] md:top-[145px]">
        note : untuk nim tidak bisa diupdate ya!
      </span>
      <InputForm
        prefix={prefix}
        type="email"
        name="email"
        judul="Email"
        value={inputValue.email}
      />
      <Button textButton="Edit Data" typeButton="submit" />
    </form>
  );
};

export default FormUpdate;
