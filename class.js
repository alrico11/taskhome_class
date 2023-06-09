class Person {
    name;
    age;
    gender;
    height;
    setName(name) {
        this.name = name
        return this.name
    }
    setAge(age) {
        this.age = age
        return age
    }
    setGender(gender) {
        this.gender = gender
        return gender
    }
    setHeight(height) {
        this.height = height
        return height
    }
    getName(name) {
        return name
    }
    getAge(age) {
        return age
    }
    getGender(gender) {
        return gender
    }
    getHeight(height) {
        return height
    }
}
const person = new Person()

console.log(person.getName(person.setName("Alrico Rizki Wibowo")))
console.log(person.getAge(person.setAge("22 Tahun")))
console.log(person.getGender(person.setGender("Laki-laki")))
console.log(person.getHeight(person.setHeight("168 cm")))

console.log("===================================================\n")

class Student{
    nama
    nim
    daftarnilai
    constructor(nama,nim,daftarnilai){
        this.nama = nama
        this.nim = nim
        this.daftarnilai =  daftarnilai
        console.log(`Nama : ${nama}\nNIM : ${nim}\nDaftar Nilai Sementara : ${daftarnilai}`)
    }
    pushNilai(value){
        this.daftarnilai.push(value)
        return this.daftarnilai
    }
    getAvg(){
        let total = 0,
        avg
        for(let i=0;i<this.daftarnilai.length;i++){
            total += this.daftarnilai[i]
        }
        avg = total/this.daftarnilai.length 
        return avg
    }
    getPredikat(avg){
        if (avg >= 90){
            console.log("Mendapatkan Predikat A")
        }else if(avg  >= 80 ){
            console.log("Mendapatkan Predikat B+")
        }else if(avg >= 70 ){
            console.log("Mendapatkan Predikat B")
        }else if(avg >= 60){
            console.log("Mendapatkan Predikat C+")
        }else if(avg >= 50){
            console.log("Mendapatkan Predikat C")
        }else if(avg >= 30){
            console.log("Mendapatkan Predikat D")
        }else{
            console.log("Mendapatkan Predikat E")
        }
    }
}
const student = new Student("Alrico Rizki Wibowo","A11.2020.12703",[80,90,50,60,100])
console.log(`RATA RATA Sementara : ${student.getAvg().toFixed()}`)
student.getPredikat(student.getAvg())

console.log(`\nDaftar Nilai Sekarang : ${student.pushNilai(100)}`)
console.log(`RATA RATA Sekarang : ${student.getAvg().toFixed()}`)
student.getPredikat(student.getAvg())