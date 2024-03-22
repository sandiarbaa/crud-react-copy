import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Layouts/Navbar";

const DashboardPage = () => {
  const username = localStorage.getItem("username") || "Guest!";
  const [mahasiswa, setMahasiswa] = useState([]);

  useEffect(() => {
    setMahasiswa(JSON.parse(localStorage.getItem("mahasiswa")) || []);
  }, []);

  const hapusData = (nim) => {
    const isConfirmed = window.confirm(
      "Apakah Anda yakin ingin menghapus data?"
    );

    if (isConfirmed) {
      const mahasiswa = JSON.parse(localStorage.getItem("mahasiswa")) || [];
      const mhs = mahasiswa.filter((mhs) => mhs.nim !== nim);
      alert("Data berhasil dihapus!");
      setMahasiswa(mhs);
      localStorage.setItem("mahasiswa", JSON.stringify(mhs));
    } else {
      alert("Penghapusan dibatalkan!");
    }
  };

  return (
    <>
      <Navbar />

      <div className="w-full min-h-screen px-8 pt-32 pb-5">
        {/* UI Mobile & Tablet */}
        <div className="lg:hidden">
          <div className="flex justify-between items-center -mt-10">
            <h1 className="mb-5 text-2xl font-semibold">Welcome, {username}</h1>

            {/* Tambah Data Button */}
            <Link
              to="/crud-react-copy/tambah"
              className="bg-blue-600 text-white px-2 py-1.5 md:px-2 md:py-2 rounded-md text-sm"
            >
              Tambah Data
            </Link>
            {/* End of Tambah Data Button */}
          </div>

          {/* Title */}
          <h2 className="text-xl font-semibold mt-3 md:text-2xl">
            Data Mahasiswa
          </h2>
          {/* End of Title */}

          {mahasiswa.length === 0 && (
            <p className="font-semibold text-lg italic mt-2">No Data</p>
          )}
          {mahasiswa.length > 0 &&
            mahasiswa.map((mhs, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex justify-center md:flex md:justify-between md:flex-wrap"
                >
                  <div className="w-full relative bg-gray-200 h-28 mt-5 border shadow flex flex-col justify-center pl-5 rounded-md mb-4 text-lg">
                    <div className="text-end absolute top-5 right-2 z-10 text-sm">
                      <Link
                        to={`/crud-react-copy/edit/${mhs.nim}`}
                        className="px-3 py-1 bg-yellow-500 mx-1 rounded-md font-semibold text-white block text-center mb-3 mt-1"
                      >
                        Edit
                      </Link>
                      <Link
                        to="#"
                        className="px-3 py-1 bg-red-500 mx-1 rounded-md font-semibold text-white"
                        onClick={() => hapusData(mhs.nim)}
                      >
                        Hapus
                      </Link>
                    </div>
                    <span className="text-sm pb-1">
                      <span className="mr-4">Nama :</span> {mhs.nama}
                    </span>
                    <span className="text-sm pb-1">
                      <span className="mr-8">NIM :</span>
                      {mhs.nim}
                    </span>
                    <span className="text-sm pb-1">
                      <span className="mr-4">Email :</span>
                      {mhs.email}
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
        {/* End of UI Mobile & Tablet */}

        {/* UI Desktop */}
        <div className="hidden lg:block">
          <h1 className="font-semibold text-2xl -mt-10 mb-5">
            Welcome, {username}
          </h1>
          <Link
            to="/crud-react-copy/tambah"
            className="bg-blue-600 text-white px-5 py-2 rounded-md text-lg"
          >
            Tambah Data
          </Link>

          <h2 className="text-2xl font-semibold mt-5">Data Mahasiswa</h2>

          {mahasiswa.length === 0 && (
            <p className="font-semibold text-lg italic mt-2">No Data</p>
          )}
          {mahasiswa.length > 0 &&
            mahasiswa.map((mhs, index) => {
              return (
                <div
                  key={index}
                  className="w-full relative flex justify-center md:flex md:justify-between md:flex-wrap"
                >
                  <div className="text-end absolute top-10 right-5 z-10 text-sm">
                    <Link
                      to={`/crud-react-copy/edit/${mhs.nim}`}
                      className="px-3 py-1 bg-yellow-500 mx-1 rounded-md font-semibold text-white"
                    >
                      Edit
                    </Link>
                    <Link
                      to="#"
                      className="px-3 py-1 bg-red-500 mx-1 rounded-md font-semibold text-white"
                      onClick={() => hapusData(mhs.nim)}
                    >
                      Hapus
                    </Link>
                  </div>
                  <ul className="w-full bg-gray-200 h-28 mt-5 border shadow flex flex-col justify-center pl-5 rounded-md mb-4 text-lg">
                    <li className="text-sm pb-1">
                      <span className="mr-4">Nama :</span> {mhs.nama}
                    </li>
                    <li className="text-sm pb-1">
                      <span className="mr-8">NIM :</span>
                      {mhs.nim}
                    </li>
                    <li className="text-sm pb-1">
                      <span className="mr-4">Email :</span>
                      {mhs.email}
                    </li>
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
