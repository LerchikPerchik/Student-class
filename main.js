'use strict';
class Student {
    constructor(name, lastname, yearOfBirth, records) {
        this.name = name;
        this.lastname = lastname;
        this.yearOfBirth = yearOfBirth;
        this.records = records;
        this.presence = new Array(25);
        this.presenceIndex = 0;
        this.avgRecord = Math.round(this.records.reduce((sum, value) => sum + value) / this.records.length);
        this.message = {
            BAD: "Редиска!",
            NORMAL: "Норм, но можно лучше",
            GOOD: "Ути какой молодчинка!"
        }
    }
    get averageRecord() {
        return this.avgRecord;
    }
    getAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        return age;
    }
    present() {
        if (this.presence.length > this.presenceIndex) {
            this.presence[this.presenceIndex] = true;
            this.presenceIndex++;
        }
    }
    absent() {
        if (this.presence.length > this.presenceIndex) {
            this.presence[this.presenceIndex] = false;
            this.presenceIndex++;
        }
    }
    get averagePresence() {
        let classNumber = this.presence.slice(0, this.presenceIndex);
        let avgPresence = classNumber.filter(value => value).length;
        return avgPresence / this.presenceIndex;
    }
    summary() {
        if (this.avgRecord < 90 && this.averagePresence < 0.9) {
            console.log(this.message.BAD)
        } else if (this.avgRecord < 90 || this.averagePresence < 0.9) {
            console.log(this.message.NORMAL)
        } else {
            console.log(this.message.GOOD)
        }
    }
}
let Vova = new Student('Vova', 'Ivanov', 1994, [100, 100, 80]);
console.log(Vova);
console.log(Vova.getAge());
console.log(Vova.averageRecord);
Vova.present();
Vova.absent();
Vova.absent();
Vova.absent();
Vova.absent();
console.log(Vova.summary());