export class WorkExperience 
{
    private positionName: string;
    private companyName: string;
    private startDate: Date;
    private endDate: Date;
    private city: string;
    private attributes: string[];

    constructor(positionName: string, companyName: string, startDate: Date, 
        endDate: Date, city: string, attributes: string[]){
            this.positionName = positionName;
            this.companyName = companyName;
            this.startDate = startDate;
            this.endDate = endDate;
            this.city = city;
            this.attributes = attributes;
    }

    getPositionName(): string{
        return this.positionName;
    }

    setPositionName(positionName: string): void{
        this.positionName = positionName;
    }

    getCompanyName(): string{
        return this.companyName;
    }

    setCompanyName(companyName: string): void{
        this.companyName = companyName;
    }

    getStartDate(): Date{
        return this.startDate;
    }

    getStartDateString(): string{
        return (this.startDate.getMonth()+"/"+this.startDate.getFullYear())
    }

    setStartDate(startDate: Date): void{
        this.startDate = startDate;
    }

    setStartDateMonthYear(year: number, month: number): void{
        this.startDate.setFullYear(year,month-1);
    }

    getEndDate(): Date{
        return this.endDate;
    }

    getEndDateString(): string{
        return (this.endDate.getMonth()+"/"+this.endDate.getFullYear())
    }

    setEndDate(endDate: Date): void{
        this.endDate = endDate;
    }

    setEndDateMonthYear(year: number, month: number): void{
        this.endDate.setFullYear(year,month-1);
    }

    getCity(): string{
        return this.city;
    }

    setCity(city: string): void{
        this.city = city;
    }
    
    getAttribute(i: number): string{
        return this.attributes[i];
    }

    getAttributes(): string[]{
        return this.attributes;
    }

    addAttribute(attribute: string): void{
        this.attributes.push(attribute);
    }

    setAttributes(attributes: string[]): void{
        this.attributes = attributes;
    }
}
