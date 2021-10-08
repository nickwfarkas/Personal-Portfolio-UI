export class Education {
    private _schoolName: string;
    private _degreeType: string;
    private _degreeName: string;
    private _startDate: Date;
    private _graduationDate: Date;
    private _gpa: string;

    constructor(schoolName: string, degreeType: string, degreeName: string,
        startDate: Date, graduationDate: Date, gpa: string){
            this._schoolName = schoolName;
            this._degreeType = degreeType;
            this._degreeName = degreeName;
            this._startDate = startDate;
            this._graduationDate = graduationDate;
            this._gpa = gpa;
    }

    getSchoolName(): string{
        return this._schoolName;
    }

    setSchoolName(schoolName: string): void{
        this._schoolName = schoolName;
    }

    getDegreeType(): string{
        return this._degreeType;
    }

    setDegreeType(degreeType: string): void{
        this._degreeType = degreeType;
    }

    getDegreeName(): string{
        return this._degreeName;
    }

    setDegreeName(degreeName: string): void{
        this._degreeName = degreeName;
    }

    getStartDate(): Date{
        return this._startDate;
    }

    setStartDate(startDate: Date): void{
        this._startDate = startDate;
    }

    getGraduationDate(): Date{
        return this._graduationDate;
    }

    setGraduationDate(graduationDate: Date): void{
        this._graduationDate = graduationDate;
    }

    getGpa(): string{
        return this._gpa;
    }

    setGpa(gpa: string): void{
        this._gpa = gpa;
    }
}
