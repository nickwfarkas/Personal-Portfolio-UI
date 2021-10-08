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
        return (this._startDate.getMonth()+"/"+this._startDate.getFullYear())
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
        return (this._endDate.getMonth()+"/"+this._endDate.getFullYear())
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
