import axios from "axios";

const BASE_URL = 'https://api.github.com/users';

export default function findUser(user: string) {
    return axios.get(`${BASE_URL}/${user}`);

}