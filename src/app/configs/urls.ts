import { environment } from "src/environments/environment.dev";

const {API} = environment;
const auth = `${API}/auth`;
const users = `${API}/users`; 
const timetable = `${API}/timetable`;

const urls = {
    auth: {
        signup: `${auth}/signup`,
        login: `${auth}/login`,
        refresh: `${auth}/refresh`,
        logout: `${auth}/logout`,
    },
    user: {
        url: users,
        clientCardAll: `${users}/clientCardAll`,
        createClientCard: `${users}/createClientCard`,
        doctorList: `${users}/doctorList`,
    },
    timetable: {
        url: timetable,
        create: `${timetable}/create`,
        change: `${timetable}/change`,
    },
};

export {urls};