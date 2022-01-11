import { Injectable } from '@angular/core';
import { CollegeClass } from '../models/college-class.model';
import { CollegeTerm } from '../models/college-term.model';

@Injectable({
  providedIn: 'root'
})
export class EducationSortingServiceService {
  sortEducationByCategory(terms: CollegeTerm[], categoryName: string): CollegeTerm[]{
    let newtermList: CollegeTerm[] = [];

    if(categoryName == "None")
    {
      return terms;
    }

    for(let term of terms)
    {
      let newClassList: CollegeClass[] = [];
      for(let c of term.getcollegeClasses())
      {
        if(c.getSubject() == categoryName)
        {
          newClassList.push(c);
        }
      }

      newtermList.push(new CollegeTerm(
        newClassList, term.getID(), term.getName(),
        term.getYear(), term.getGPA(), term.getStanding()
        ))
    }
    return newtermList;
  }
}
