/* Soal 2
- Buatlah sebuah class untuk menyimpan data seseorang dan minimal dapat menyimpan nama, NIK dan jenis kelamin. Terdapat incapsulation pada class ini, jadi property yang harus di set dan diambil melalui methods. Kemudian buat 2 class turunan seperti berikut:
1. class Employee yang akan menyimpan data pekerjaan dan salary.
2. class Student yang akan menyimpan data kampus serta jurusan dimana dia belajar.

Lengkapi dengan method untuk mengambil data data tersebut! */

class Identitas
{
    nama = '';
    nik = 0;
    jenisKelamin;

    setName(nama)
    {
        this.nama = nama;
    }

    setNik(nik)
    {
        this.nik = nik;
    }

    setJenisKelamin(jk)
    {
        this.jenisKelamin = jk;
    }

    getName()
    {
        return this.nama;
    }

    getNik()
    {
        return this.nik;
    }

    getJenisKelamin()

    {
        return this.jenisKelamin;
    }
}

class Employee extends Identitas
{
    pekerjaan = '';
    salary = 0;

    setPekerjaan(pekerjaan)
    {
        this.pekerjaan = pekerjaan;
    }

    setSalary(salary)
    {
        this.salary = salary;
    }

    getPekerjaan()
    {
        return this.pekerjaan;
    }

    getSalary()
    {
        return this.salary;
    }

}

class Student extends Identitas
{
    universitas = '';
    jurusan = 0;

    setUniversitas(universitas)
    {
        this.universitas = universitas;
    }

    setJurusan(jurusan)
    {
        this.jurusan = jurusan;
    }

    getUniversitas()
    {
        return this.universitas;
    }

    getJurusan()
    {
        return this.jurusan;
    }

}

const student = new Student();

student.setName('Rizky');
student.setNik(86746876757854);
student.setJenisKelamin('Laki laki');
student.setUniversitas('Universitas Suryakancana');
student.setJurusan('Teknik Informatika');

let nama = student.getName();

console.log('Nama : ' + nama);

let nik = student.getNik();

console.log('NIK : ' + nik);
let jk = student.getJenisKelamin();
console.log('Jenis Kelamin : ' + jk);
let universitas = student.getUniversitas();
console.log('Universitas : ' + universitas);
let jurusan = student.getJurusan();
console.log('Jurusan : ' + jurusan);