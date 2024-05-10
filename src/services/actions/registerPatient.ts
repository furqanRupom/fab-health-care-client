"use server";

export const registerPatient = async (formData:FormData) => {
    console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/create-patient`,{
        method:"POST",
        body:formData,
        cache:"no-store"
    });
    const data  = await response.json();
    return data;
}