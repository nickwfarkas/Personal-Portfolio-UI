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

    getStartDateString(): string{
        switch(this._startDate.getMonth()){
            case 0: return ("January/"+this._startDate.getFullYear());
            case 1: return ("February/"+this._startDate.getFullYear());
            case 2: return ("March/"+this._startDate.getFullYear());
            case 3: return ("April/"+this._startDate.getFullYear());
            case 4: return ("May/"+this._startDate.getFullYear());
            case 5: return ("June/"+this._startDate.getFullYear());
            case 6: return ("July/"+this._startDate.getFullYear());
            case 7: return ("August/"+this._startDate.getFullYear());
            case 8: return ("September/"+this._startDate.getFullYear());
            case 9: return ("October/"+this._startDate.getFullYear());
            case 10: return ("November/"+this._startDate.getFullYear());
            case 11: return ("December/"+this._startDate.getFullYear()); 
            default: return ("Current"); 
        }
    }

    getStartDate(): Date{
        return this._startDate;
    }

    setStartDate(startDate: Date): void{
        this._startDate = startDate;
    }

    getGraduationDateString(): string{
        switch(this._graduationDate.getMonth()){
            case 0: return ("January/"+this._graduationDate.getFullYear());
            case 1: return ("February/"+this._graduationDate.getFullYear());
            case 2: return ("March/"+this._graduationDate.getFullYear());
            case 3: return ("April/"+this._graduationDate.getFullYear());
            case 4: return ("May/"+this._graduationDate.getFullYear());
            case 5: return ("June/"+this._graduationDate.getFullYear());
            case 6: return ("July/"+this._graduationDate.getFullYear());
            case 7: return ("August/"+this._graduationDate.getFullYear());
            case 8: return ("September/"+this._graduationDate.getFullYear());
            case 9: return ("October/"+this._graduationDate.getFullYear());
            case 10: return ("November/"+this._graduationDate.getFullYear());
            case 11: return ("December/"+this._graduationDate.getFullYear()); 
            default: return ("Current"); 
        }
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
