//传入时间戳进行格式化Y-m-d H:i:s
export function date(unix_time){
    let dateObj = new Date( unix_time*1000 )
    let Y = dateObj.getFullYear()
    let m = dateObj.getMonth()+1 < 10 ? `0${dateObj.getMonth()+1}` : dateObj.getMonth()+1
    let d = dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : dateObj.getDate()
    let H = dateObj.getHours() < 10 ? `0${dateObj.getHours()}` : dateObj.getHours()
    let i = dateObj.getMinutes() < 10 ? `0${dateObj.getMinutes()}` : dateObj.getMinutes()
    let s = dateObj.getSeconds() < 10 ? `0${dateObj.getSeconds()}` : dateObj.getSeconds()

    return `${Y}-${m}-${d} ${H}:${i}:${s}`
}
