export interface HeaderType {
  jobTitle: string;
  companyLink: string;
  companyName: string;
  location: string;
  duration: string;
}

export interface DescriptionType {
  companyInfo: string;
  bulletPoints: Array<string>;
}

export interface TechStackType {
  description: string;
}

export type WorkExperienceTypes = HeaderType & DescriptionType & TechStackType;
