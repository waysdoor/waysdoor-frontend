"use server"

import axios from "axios";

export  async function submitPostForm(prevstate,formdata) {
    try {
        const { title, description,image } = Object.fromEntries(formdata);
        const formdatatosend=new FormData()
        formdatatosend.append('title', title);
        formdatatosend.append('description', description);
        formdatatosend.append('image', image);
        formdatatosend.append('author','Gaurav')
        const response = await axios.post('http://localhost:8080/api/add-post', formdatatosend);
        return {...prevstate, success: true ,status:Object.keys(response.data)[0] };
    } catch (error) {
        console.log(error.response.data);
        return { ...prevstate,success: false, status: error.response.data };
    }
   

}





