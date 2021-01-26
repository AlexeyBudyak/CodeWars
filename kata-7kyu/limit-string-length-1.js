function solution(string,limit){
    return   string.slice(0,limit) + ((string.length <= limit) ? '' : '...');
}
