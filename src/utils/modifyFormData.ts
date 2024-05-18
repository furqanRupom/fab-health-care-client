export const modifyPayload = (values:any) => {
    const obj = {...values};
    const file = obj["file"];
    delete obj["file"];
    const data = JSON.stringify(obj);
    const converToFormData = new FormData();
    converToFormData.append('data',data);
    converToFormData.append('file',file as Blob);
    return converToFormData;
  
}