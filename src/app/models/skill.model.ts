export class Skill {
    private _skillName: string;
    private _skillDescription: string;
    private _skillRating: number;
    private _industryExperience: number;
    private _tags: string[];

    constructor(skillName: string, skillDescription: string,
        skillRating: number, industryExperience: number,
        tags: string[]){
            this._skillName = skillName;
            this._skillDescription = skillDescription;
            this._industryExperience = industryExperience;
            this._tags = tags;
            if(skillRating <= 1) this._skillRating = 1;
            else if(skillRating >= 3) this._skillRating = 3;
            else this._skillRating = 2;
            this._skillRating = skillRating;
    }

    getSkillName(): string{
        return this._skillName;
    }

    setSkillName(skillName: string): void{
        this._skillName = skillName;
    }

    getSkillDescription(): string{
        return this._skillDescription;
    }

    setSkillDescription(skillDescription: string): void{
        this._skillDescription = skillDescription;
    }

    getSkillRating(): number{
        return this._skillRating;
    }

    setSkillRating(skillRating: number):  void{
        if(skillRating <= 1) skillRating = 1;
        else if(skillRating >= 3) skillRating = 3;
        else skillRating = 2;
        this._skillRating = skillRating;
    }

    getIndustryExperience(): number{
        return this._industryExperience;
    }

    setIndustryExperience(industryExperience: number){
        this._industryExperience =industryExperience;
    }

    getTag(i: number): string{
        return this._tags[i];
    }

    getTags(): string[]{
        return this._tags;
    }

    addTag(tag: string): void{
        this._tags.push(tag);
    }

    setTags(tags: string[]): void{
        this._tags = tags;
    }
}
