import { atomWithStorage } from 'jotai/utils';

export interface UserInfoProps {
    name: string;
    password: string;
}

export const userForm = atomWithStorage<UserInfoProps>('userInfo', {
    name: '',
    password: '',
});
