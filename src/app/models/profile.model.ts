import { Skill } from "./skill.model";
import { WorkExperience } from "./work-experience.model";
export class Profile {
    private _name: string;
    private _email: string;
    private _phoneNumber: string;
    private _workExperience: WorkExperience[]; //TODO Work Experience Class
    private _skills: Skill[];
    private _gitHubUrl: string;
    private _instagramUrl: string;
    private _linkedInUrl: string;

    constructor(name: string, email: string, phoneNumber: string, 
        workExperience: WorkExperience[], skills: Skill[], 
        gitHubUrl: string, instagramUrl: string, linkedInUrl: string){
        this._name = name;
        this._email = email;
        this._phoneNumber = phoneNumber;
        this._workExperience = workExperience;
        this._skills = skills;
        this._gitHubUrl = gitHubUrl;
        this._instagramUrl = instagramUrl;
        this._linkedInUrl = linkedInUrl;
    }

    getName(): string{
        return this._name;
    }

    setName(name: string): void{
        this._name = name;
    }

    getEmail(): string{
        return this._email;
    }

    setEmail(email: string): void{
        this._email = email;
    }

    getPhoneNumber(): string{
        return this._phoneNumber;
    }

    setPhoneNumber(phoneNumber: string): void{
        this._phoneNumber = phoneNumber;
    }

    getWorkExperience(i: number): WorkExperience{
        return this._workExperience[i];
    }

    getAllWorkExperience(): WorkExperience[]{
        return this._workExperience;
    }

    setWorkExperience(workExperience: WorkExperience[]): void{
        this._workExperience = workExperience;
    }

    addWorkExperience(work: WorkExperience): void{
        this._workExperience.push(work);
    }

    getSkill(i: number): Skill{
        return this._skills[i];
    }

    getAllSkills(): Skill[]{
        return this._skills;
    }

    setSkills(skills: Skill[]): void{
        this._skills = skills;
    }

    addSkill(skill: Skill): void{
        this._skills.push(skill);
    }

    getGitHubUrl(): string{
        return this._gitHubUrl;
    }

    setGitHubUrl(gitHubUrl: string)
    {
        this._gitHubUrl = gitHubUrl;
    }

    getInstagramUrl(): string{
        return this._instagramUrl;
    }

    setInstagramUrl(instagramUrl: string): void{
        this._instagramUrl = instagramUrl;
    }

    getLinkedInUrl(): string{
        return this._linkedInUrl;
    }

    setLinkedInUrl(linkedIn: string): void{
        this._linkedInUrl = linkedIn;
    }

}
