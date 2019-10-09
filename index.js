function isStartNumSmallerThanTheEndNum(StartNum, EndNum){ 

    return StartNum < EndNum;
}

function is(StartNum, EndNum){

    return StartNum <= EndNum;
}


function areStartNumAndEndNumAreWithinRange(StartNum, EndNum){

    const StartInRange = ( StartNum > 1 && StartNum <= 1000 );
    const EndInRange = ( EndNum > 1 && EndNum <= 1000 );

    return StartInRange && EndInRange;
}

function multiplyRange(StartNum, EndNum){
    let multiply = 0;
    let string = "";
    for(let row = StartNum; row <= EndNum ; row++){
        for(let row_content = StartNum; row_content <= row; row_content++){
                multiply = row_content*row; 
                string += row_content + "*" + row + "=" + multiply + " "; 
            }
            string = string.trim(); 
            string+="\n";
        }     

        return string;
}

module.exports = {
    isStartNumSmallerThanTheEndNum: isStartNumSmallerThanTheEndNum ,
    areStartNumAndEndNumAreWithinRange: areStartNumAndEndNumAreWithinRange ,
    multiplyRange: multiplyRange
};