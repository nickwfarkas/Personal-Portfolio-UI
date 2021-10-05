import { Skill } from "./skill.model";
import { WorkExperience } from "./work-experience.model";
export class Profile {
    private name: string;
    private email: string;
    private phoneNumber: string;
    private workExperience: WorkExperience[]; //TODO Work Experience Class
    private skills: Skill[];
    private gitHubUrl: string;
    private instagramUrl: string;

    constructor(name: string, email: string, phoneNumber: string, 
        workExperience: WorkExperience[], skills: Skill[], 
        gitHubUrl: string, instagramUrl: string){
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.workExperience = workExperience;
        this.skills = skills;
        this.gitHubUrl = gitHubUrl;
        this.instagramUrl = instagramUrl;
    }

    getName(): string{
        return this.name;
    }

    setName(name: string): void{
        this.name = name;
    }

    getEmail(): string{
        return this.email;
    }

    setEmail(email: string): void{
        this.email = email;
    }

    getPhoneNumber(): string{
        return this.phoneNumber;
    }

    setPhoneNumber(phoneNumber: string): void{
        this.phoneNumber = phoneNumber;
    }

    getWorkExperience(i: number): WorkExperience{
        return this.workExperience[i];
    }

    getAllWorkExperience(): WorkExperience[]{
        return this.workExperience;
    }

    setWorkExperience(workExperience: WorkExperience[]): void{
        this.workExperience = workExperience;
    }

    addWorkExperience(work: WorkExperience): void{
        this.workExperience.push(work);
    }

    getSkill(i: number): Skill{
        return this.skills[i];
    }

    getAllSkills(): Skill[]{
        return this.skills;
    }

    setSkills(skills: Skill[]): void{
        this.skills = skills;
    }

    addSkill(skill: Skill): void{
        this.skills.push(skill);
    }

    getGitHubUrl(): string{
        return this.gitHubUrl;
    }

    setGitHubUrl(gitHubUrl: string)
    {
        this.gitHubUrl = gitHubUrl;
    }

    getInstagramUrl(): string{
        return this.instagramUrl;
    }

    setInstagramUrl(instagramUrl: string): void{
        this.instagramUrl = instagramUrl;
    }


}
