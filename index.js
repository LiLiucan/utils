
/**
 * 大数转字符串
 * @param {*大数} bigNum 
 */
function bigNumberToStr(bigNum){
    const resArr = [];
    let originNum = bigNum;
	while(originNum >= 1){
		let remainder = originNum % 10;
		resArr.push(Number(remainder).toFixed(0));
		originNum = (originNum - remainder) / 10;
	}
	
	return resArr.reverse().join('');
}
console.log(bigNumberToStr(183018470205206528));

// console.log(bigNumberToStr(183018470205206528) === bigNumberToStr(183018470205206528));
