export const calculateTimeDifference = (pastTime)=>{
    const d1 = new Date(pastTime);
    const d2 = new Date();

    const differenceInSec = parseInt((d2-d1)/1000);

    if(differenceInSec < 60) return `${parseInt(differenceInSec)} secondes ago`;
    if(differenceInSec < 3600) return `${parseInt(differenceInSec/60)} minutes ago`;
    if(differenceInSec < 86400) return `${parseInt(differenceInSec/3600)} hrs ago`;
    if(differenceInSec < 604800) return `${parseInt(differenceInSec/86400)} minutes ago`;
    if(differenceInSec < 2592000) return `${parseInt(differenceInSec/604800)} weeks ago`;
    if(differenceInSec < 31536000) return `${parseInt(differenceInSec/2592000)} months ago`;
    return `${parseInt(differenceInSec/31536000)} years ago`;

}