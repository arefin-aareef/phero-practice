// Syntactic Sugar

class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thamk you for your feedback`);
    }
}

class Instructor extends TeamMember{
    designation = 'Instructor'
    team = 'web team'
    constructor(name, location){
        super(name, location)

    }
    startSupportSession(time){
        console.log(`start support session at ${time}`);
    }
    crerateQuiz(module){
        console.log(`create quiz for module ${module}`);
    }
    provideFeedback(){
        console.log(`${this.name} thamk you for your feedback`);
    }
}

// const aamir = new Instructor('aamir', 'mumbai');
// console.log(aamir);
// aamir.startSupportSession('9.00')
// aamir.crerateQuiz(60);

// const solaiman = new Instructor('solaiman', 'delhi');
// console.log(solaiman);


class Developer extends TeamMember{
    designation = 'Instructor'
    team = 'web team'
    tech;
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;

    }
    developFeature(feature){
        console.log(`Please develop the ${feature}`);
    }
    crerateQuiz(version){
        console.log(`release the version ${version}`);
    }
}

class JobPlacement extends TeamMember{
    designation = 'Job Placement'
    team = 'Job Placement'
    region;
    constructor(name, location, region){
        super(name, location)
        this.region = region;

    }
    provideResume(feature){
        console.log(`Please develop the ${feature}`);
    }
    prepareStudent(version){
        console.log(`release the version ${version}`);
    }
}

const alia = new Developer('Alia', 'Dhaka', 'React');
console.log(alia);
alia.provideFeedback();

const bipasha = new JobPlacement('Bipasha', 'Kolkata', 'India');
console.log(bipasha);