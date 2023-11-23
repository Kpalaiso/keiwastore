import axios from 'axios';

export const sendNotification = async (data) =>{
    try {
        let res = await  axios({
            method: 'POST',
            baseURL:"https://testapi.keiwa.app",
            url: '/send_notification',
            data:{
                title:data.title,
                description:data.description,
                token:data.token,
                id_user:data.id_user
            },
            timeout: 60000,
            headers: {"Access-Control-Allow-Origin":'*','X-Custom-Header': 'foobar'},
            responseType: 'json',
          })
          return res.data;
    } catch (error) {
        return error;
    }
}