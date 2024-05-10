export const modifyPayload = (values:any) => {
    const obj = {...values};
    const data = JSON.stringify(obj)
    const converToFormData = new FormData();
    converToFormData.append('data',data);
    return converToFormData;
  
}