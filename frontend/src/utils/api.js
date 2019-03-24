import Axios from "axios";
import {baseApiUrl} from "../utils/constants";


// УНИФИЦИРУЙ Ф-ИИ КОТОРЫЕ ТРЕБУЮТ АВТОРИЗАЦИИ!!!!!! С ТОКЕНОМ

const checkToken = (token) => Axios.post(`${baseApiUrl}/check-token`, { token });
const userAuth = (loginData) => Axios.post(`${baseApiUrl}/api-token-auth`, loginData);
const fetchDay = (token, userId) => Axios.get(`${baseApiUrl}/planing/day-tasks`, {
		headers: {
	  		Authorization: `Token ${token}`
		},
	    params: {
			user_id: userId
	    }
	  });

export default {
	checkToken,
	userAuth,
	fetchDay
};