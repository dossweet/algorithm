function getDayforWeek( str ) {
    let arr = str.split('-');
    let year = arr[0];
    let month = arr[1];
    let day = arr[2];
    let days = 0;
    // 判断闰年
    function leapYear(year){
        if(year % 4 === 0 && year % 100 !== 0||year % 400 == 0){
            return true;
        }
        return false;
    }
    // 判断星期
    let getWeek = (str) => {
        let arr = str.split('-');
        let year = parseInt(arr[0]);
        let month = parseInt(arr[1]);
        let day = parseInt(arr[2]);
        let date = new Date(year, month - 1, day).getDay();
        switch (date){
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
            case 7:
                return 'Sunday';
        }
    }
    switch(parseInt(month)){
        case 12:
            days += 30;
        case 11:
            days += 31;
        case 10:
            days += 30;
        case 9:
            days += 31;
        case 8:
            days += 31;
        case 7:
            days += 30;
        case 6:
            days += 31;
        case 5:
            days += 30;
        case 4:
            days += 31;
        case 3:
            if(leapYear(year)){
                days += 29;
            }else{
                days += 28;
            }
        case 2:
            days += 31;
        case 1:
            days += 0;
            break;
    }
    days += parseInt(day);
    return days + '(' + getWeek(str)+')';
}


console.log(getDayforWeek("2018-10-01"));
console.log(getWeek("2018-10-01"));

