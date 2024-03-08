"use server"

import API_BASE_URL from "@/utils/baseURL";
import { revalidateTag } from "next/cache";

export async function submitPostForm(prevstate, formdata) {
    try {
       
        const { title, description, image } = Object.fromEntries(formdata);
        // console.log(image,"action image")
        const formdatatosend = new FormData();
        formdatatosend.append('title', title);
        formdatatosend.append('description', description);
        formdatatosend.append('image', image);
        formdatatosend.append('author', 'Gaurav');
        const response = await fetch(`${API_BASE_URL}/api/add-post`, { method: 'POST', body: formdatatosend });

        if (!response.ok) {
            const errorResponse = await response.json();
            // console.log("error response",errorResponse.errors)
            throw { Error: errorResponse };
        }
        
        const responseData = await response.json();
        // console.log("Response in actions", responseData);

        return { ...prevstate, success: true, status: Object.keys(responseData)[0] };
    } catch (e) {
        // console.log("Error from actions", e.Error.errors);
        return { ...prevstate, success: false, status: e.Error };
    }
}






