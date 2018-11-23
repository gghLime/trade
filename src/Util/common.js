
export function formatDate(Date) {
    var format_date = "";
    var year = Date.getFullYear().toString(); //得到年份
    var month = Date.getMonth().toString();//得到月份
    var date = Date.getDate().toString();//得到日期
    var hour = Date.getHours().toString();//得到日期
    var minute = Date.getMinutes().toString();//得到日期
    var second  = Date.getSeconds().toString();//得到日期
    if (month < 10) month = "0" + month;
    if (date < 10) date = "0" + date;
    format_date = year + "-" + month + "-" + date + " " + hour+ ":" + minute + ":" + second;
    return format_date;
}
