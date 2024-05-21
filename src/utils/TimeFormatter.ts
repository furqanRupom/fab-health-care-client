export const TimeFormatter = (time:string) => {
    const date = new Date(time);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedTime = `${hours}:${formattedMinutes}`;
    return formattedTime;

}