export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  UNKNOWN = 'Unknown',
}

export type Genders = (typeof Gender)[keyof typeof Gender];
