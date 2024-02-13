import http from 'k6/http';
import{sleep,check} from 'k6';


export const options={
    vus : '10'
    duration : '30s'
    
}








export default function() {
const url='https://petstore.swagger.io/v2/swagger.json'

const payload= JSON.stringify({
    "id": 2,
    "username": "guddy",
    "firstName": "jasaswee",
    "lastName": "sethy",
    "email": "s@gmail.com",
    "password": "s@123",
    "phone": "9090901612",
    "userStatus": 9
  }),
}
  const params={
    Headers : {
        'content-Type' : "application/json"
    },
  };

  http.post(url,payload,params)