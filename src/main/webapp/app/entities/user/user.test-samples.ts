import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: '1037fdd4-0fbe-4976-b32d-e4bb8d3d995e',
  login: 'Oe',
};

export const sampleWithPartialData: IUser = {
  id: '3bda36b3-58ff-4b1a-8748-ba9c52e1671b',
  login: 'cGuX',
};

export const sampleWithFullData: IUser = {
  id: 'a5008554-6ab6-479e-9de7-ff023a23d8b5',
  login: 'iqIY',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
