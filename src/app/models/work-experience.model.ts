export class WorkExperience 
{
    private _positionName: string;
    private _companyName: string;
    private _startDate: Date;
    private _endDate: Date;
    private _city: string;
    private _attributes: string[];

    constructor(positionName: string, companyName: string, startDate: Date, 
        endDate: Date, city: string, attributes: string[]){
            this._positionName = positionName;
            this._companyName = companyName;
            this._startDate = startDate;
            this._endDate = endDate;
            this._city = city;
            this._attributes = attributes;
    }

    getPositionName(): string{
        return this._positionName;
    }

    setPositionName(positionName: string): void{
        this._positionName = positionName;
    }

    getCompanyName(): string{
        return this._companyName;
    }

    setCompanyName(companyName: string): void{
        this._companyName = companyName;
    }

    getStartDate(): Date{
        return this._startDate;
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
            default: return ("NA/"+this._startDate.getFullYear()); 
        }
    }
    
    setStartDate(startDate: Date): void{
        this._startDate = startDate;
    }

    setStartDateMonthYear(year: number, month: number): void{
        this._startDate.setFullYear(year,month-1);
    }

    getEndDate(): Date{
        return this._endDate;
    }

    getEndDateString(): string{
        switch(this._endDate.getMonth()){
            case 0: return ("January/"+this._endDate.getFullYear());
            case 1: return ("February/"+this._endDate.getFullYear());
            case 2: return ("March/"+this._endDate.getFullYear());
            case 3: return ("April/"+this._endDate.getFullYear());
            case 4: return ("May/"+this._endDate.getFullYear());
            case 5: return ("June/"+this._endDate.getFullYear());
            case 6: return ("July/"+this._endDate.getFullYear());
            case 7: return ("August/"+this._endDate.getFullYear());
            case 8: return ("September/"+this._endDate.getFullYear());
            case 9: return ("October/"+this._endDate.getFullYear());
            case 10: return ("November/"+this._endDate.getFullYear());
            case 11: return ("December/"+this._endDate.getFullYear()); 
            default: return ("Current"); 
        }
    }

    setEndDate(endDate: Date): void{
        this._endDate = endDate;
    }

    setEndDateMonthYear(year: number, month: number): void{
        this._endDate.setFullYear(year,month-1);
    }

    getCity(): string{
        return this._city;
    }

    setCity(city: string): void{
        this._city = city;
    }
    
    getAttribute(i: number): string{
        return this._attributes[i];
    }

    getAttributes(): string[]{
        return this._attributes;
    }

    addAttribute(attribute: string): void{
        this._attributes.push(attribute);
    }

    setAttributes(attributes: string[]): void{
        this._attributes = attributes;
    }
}
