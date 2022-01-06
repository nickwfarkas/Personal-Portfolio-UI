import { CollegeClass } from "./college-class.model";

export class CollegeTerm {
    private _collegeClasses: CollegeClass[];
    private _ID: string;
    private _name: string;
    private _year: string;
    private _GPA: string;
    private _standing: string;

    constructor(collegeClasses: CollegeClass[], ID: string, name: string,
        year: string, GPA: string, standing: string){
            this._collegeClasses = collegeClasses;
            this._ID = ID;
            this._name = name;
            this._year = year;
            this._GPA = GPA;
            this._standing = standing;
    }

    getcollegeClasses(): CollegeClass[]{
        return this._collegeClasses;
    } 

    getID(): string{
        return this._ID;
    }

    getName(): string{
        return this._name;
    }

    getYear(): string{
        return this._year;
    }

    getGPA(): string{
        return this._GPA
    }

    getStanding(): string{
        return this._standing;
    }
}
