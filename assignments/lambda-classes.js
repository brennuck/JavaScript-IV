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
    demo() {
        return `Today we are learning about ${this.subject}.`;
    }
    grade() {
        return `${this.name} receives a perfect score on ${this.subject}.`;
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
        return `${this.favSubjects}.`
    }
    PRAssignment() {
        return `${this.name} has submitted a PR for ${this.subject}`;
    }
    sprintChallenge() {
        return `${this.name} has begun sprint challenge on ${this.subject}.`;
    }
}
class ProjectManagers extends instructor {
    constructor(attributes) {
        super(attributes)
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp() {
        return `${this.name} announces to ${this.channel}, @channel standy times!`
    }
    debugsCode() {
        return `${this.name} debugs ${this.name}'s code on ${this.subject}.`
    }
}