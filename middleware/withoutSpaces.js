
function removeEmpty(char){
    if(char != ' '){
        return char;
    }
}

export default function withoutSpaces(str){
    let str1 = str.split('');
    let res = str1.filter(removeEmpty);
    res = res.join('');

    return res;
}