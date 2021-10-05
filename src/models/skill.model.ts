export class Skill {
    private skillName: string;
    private skillDescription: string;
    private skillRating: number;
    private industryExperience: number;
    private tags: string[];

    constructor(skillName: string, skillDescription: string,
        skillRating: number, industryExperience: number,
        tags: string[]){
            this.skillName = skillName;
            this.skillDescription = skillDescription;
            this.industryExperience = industryExperience;
            this.tags = tags;
            if(skillRating <= 1) skillRating = 1;
            else if(skillRating >= 3) skillRating = 3;
            else skillRating = 2;
            this.skillRating = skillRating;
    }

    getSkillName(): string{
        return this.skillName;
    }

    setSkillName(skillName: string): void{
        this.skillName = skillName;
    }

    getSkillDescription(): string{
        return this.skillDescription;
    }

    setSkillDescription(skillDescription: string): void{
        this.skillDescription = skillDescription;
    }

    getSkillRating(): number{
        return this.skillRating;
    }

    setSkillRating(skillRating: number):  void{
        if(skillRating <= 1) skillRating = 1;
        else if(skillRating >= 3) skillRating = 3;
        else skillRating = 2;
        this.skillRating = skillRating;
    }

    getIndustryExperience(): number{
        return this.industryExperience;
    }

    setIndustryExperience(industryExperience: number){
        this.industryExperience =industryExperience;
    }

    getTag(i: number): string{
        return this.tags[i];
    }

    getTags(): string[]{
        return this.tags;
    }

    addTag(tag: string): void{
        this.tags.push(tag);
    }

    setTags(tags: string[]): void{
        this.tags = tags;
    }
}
