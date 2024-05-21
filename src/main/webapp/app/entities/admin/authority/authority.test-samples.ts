import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '8fba256d-da7a-482b-a057-a2b11843574e',
};

export const sampleWithPartialData: IAuthority = {
  name: '35816f01-ee2f-453f-a079-1837cb78c483',
};

export const sampleWithFullData: IAuthority = {
  name: '25e1a65f-3fbf-40e9-8c9f-467a6d0606fa',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
