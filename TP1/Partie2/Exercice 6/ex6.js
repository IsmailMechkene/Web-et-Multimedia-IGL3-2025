

class Student {
    name 
    grade

    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }

    getMontion() {
        if (this.grade >= 16) {
            console.log("tres bien")
        }
        else if (this.grade >= 14) {
                console.log("bien")
        }
        else if (this.grade >= 10) {
                console.log("passable")
        } else {
            console.log("echec")
        }
    }
}

const student1 = new Student("ismail", 20)
student1.getMontion()
