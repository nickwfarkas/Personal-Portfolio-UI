import { CollegeTerm } from "./college-term.model";
import { EducationSummary } from "./education-summary.model";

export class Education {
    private _summary: EducationSummary[];
    private _collegeTerm: CollegeTerm[];

    constructor(summary: EducationSummary[], collegeTerm: CollegeTerm[]){
        this._summary = summary;
        this._collegeTerm = collegeTerm;
    }

    getSummary(): EducationSummary[]{
        return this._summary;
    }

    getCollegeTerm(): CollegeTerm[]{
        return this._collegeTerm;
    }
}
