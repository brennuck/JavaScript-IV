// CODE here for your Lambda Classes
class person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak () {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}
class instructor extends person {
    constructor(attributes) {
        super(attributes)
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student,subject) {
        return `${student} receives a perfect score on ${subject}.`;
    }
}
class student extends person {
    constructor(attributes) {
        super(attributes)
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects() {
        let favorites=[];
        for (let i = 0; i < this.favSubjects.length; i++) {
            favorites.push(this.favSubjects[i]);
        }
        return favorites;
    }
    PRAssignment(student,subject) {
        return `${student} has submitted a PR for ${subject}`;
    }
    sprintChallenge(student,subject) {
        return `${student} has begun sprint challenge on ${subject}.`;
    }
}
class ProjectManager extends instructor {
    constructor(attributes) {
        super(attributes)
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(StudentName,subject) {
        return `${this.name} debugs ${StudentName}'s code on ${subject}.`
    }
}

const Josh = new instructor({
    name: 'Josh',
    age: 25,
    location: 'Utah',
    gender: 'Male',
    specialty: 'Being perfect',
    favLanguage: 'Javascript',
    catchPhrase: 'BANJO SOUNDS'
});

const Brennon = new student({
    name: 'Brennon',
    age: 19,
    location: 'Utah',
    gender: 'Male',
    previousBackground: 'None',
    className: 'Web18',
    favSubjects: ['Javascript', 'Music', 'Basketball']
});
const Rodger = new student({
    name: 'Rodger',
    age: 42,
    location: 'Arkansas',
    gender: 'Male',
    previousBackground: '"Knows how to turn on computer"',
    className: 'Web18',
    favSubjects: ['HTML', 'Running', 'Cooking']
});
const Pete = new student({
    name: 'Pete',
    age: 17,
    location: 'California',
    gender: 'Male',
    previousBackground: 'Taught the instructor everything he knows',
    className: 'Web18',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
});

const Bryce = new ProjectManager({
    name: 'Bryce',
    age: 23,
    location: 'Alaska',
    gender: 'Female',
    gradClassName: 'Web12',
    favInstructor: 'Greg'
});

console.log(Brennon.speak());
console.log(Josh.demo('Javascript IV'));
console.log(Josh.grade('Brennon','Sprint-Challenge: Javascript'));
console.log(Pete.listsSubjects());
console.log(Rodger.PRAssignment('Rodger','The assingment'));
console.log(Pete.sprintChallenge('Pete','Javascript'));
console.log(Bryce.standUp('web18_bryce'))
console.log(Bryce.debugsCode('Brennon','Javascript'))