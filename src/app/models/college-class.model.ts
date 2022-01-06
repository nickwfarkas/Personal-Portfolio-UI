export class CollegeClass {
    private _code: string;
    private _name: string;
    private _description: string;
    private _grade: string;
    private _takenAt: string;
    private _image: string;
    private _professorName: string;
    private _rateMyProfessorLink: string;
    private _personalNote: string;
    private _githubLink: string;
    private _subject: string;
    private _rating: string;

    constructor(code: string, name: string, description: string, grade: string,
        takenAt: string, image: string, professorName: string,
        rateMyProfessorLink: string, personalNote: string, githubLink: string,
        subject: string, rating: string){
            this._code = code;
            this._name = name;
            this._description = description;
            this._grade = grade;
            this._takenAt = takenAt;
            this._image = image;
            this._professorName = professorName;
            this._rateMyProfessorLink = rateMyProfessorLink;
            this._personalNote = personalNote;
            this._githubLink = githubLink;
            this._subject= subject;
            this._rating = rating;
    }

    getCode(): string{
        return this._code;
    } 

    getName(): string{
        return this._name;
    } 

    getDescription(): string{
        return this._description;
    } 

    getGrade(): string{
        return this._grade;
    }

    getTakenAt(): string{
        return this._takenAt;
    } 

    getImage(): string{
        return this._image;
    } 

    getprofessorName(): string{
        return this._professorName;
    } 

    getRateMyProfessorLink(): string{
        return this._rateMyProfessorLink;
    } 

    getPersonalNote(): string{
        return this._personalNote;
    } 

    getGitHubLink(): string{
        return this._githubLink;
    } 

    getSubject(): string{
        return this._subject;
    } 

    getRating(): string{
        return this._rating;
    } 
}

