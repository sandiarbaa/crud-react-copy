import React from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormAdd = ({ prefix }) => {
  const addData = (e) => {
    e.preventDefault();

    if (localStorage.getItem("mahasiswa") === null) {
      let mahasiswa = [];

      let nama = e.target.nama.value;
      let nim = e.target.nim.value;
      let email = e.target.email.value;

      let objMhs = {
        id: 1,
        nama: nama,
        nim: nim,
        email: email,
      };

      mahasiswa.push(objMhs);
      localStorage.setItem("mahasiswa", JSON.stringify(mahasiswa));
      alert("Mahasiswa baru berhasil ditambahkan!");
      window.location.href = "/crud-react-copy/dashboard";
    } else {
      let mahasiswa = JSON.parse(localStorage.getItem("mahasiswa"));

      // kalau ada mahasiswa yg nim nya sama dengan inputan nim terbaru
      let exists = mahasiswa.some((mhs) => mhs.nim === e.target.nim.value);
      if (exists) {
        alert("Mahasiswa sudah ada");
        return; // Keluar dari fungsi addData
      }

      let nama = e.target.nama.value;
      let nim = e.target.nim.value;
      let email = e.target.email.value;

      let objMhs = {
        nama: nama,
        nim: nim,
        email: email,
      };

      mahasiswa.push(objMhs);
      localStorage.setItem("mahasiswa", JSON.stringify(mahasiswa));
      alert("Mahasiswa baru berhasil ditambahkan!");
      window.location.href = "/crud-react-copy/dashboard";
    }
  };

  return (
    <form onSubmit={addData}>
      <InputForm prefix={prefix} type="text" name="nama" judul="Nama" />
      <InputForm prefix={prefix} type="text" name="nim" judul="NIM" />
      <InputForm prefix={prefix} type="email" name="email" judul="Email" />
      <Button textButton="Tambah Data" typeButton="submit" />
    </form>
  );
};

export default FormAdd;
