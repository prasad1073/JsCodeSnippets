

setTimeout(() => {
    console.log('Two Seconds')
}, 2000);

const names = ['Ritik','Raj','Surya']
const shortNames = names.filter((name)=>{
    return name.length <= 4
})

const geocode = (address, callback) => {
setTimeout(() => {
    const data = {
        latitude : 0,
        longitude : 0
    }
    callback(data)
}, 2000);
}

geocode('India',(data) => {
    console.log(data)
})

const add = (a,b,callback) => {
setTimeout(() => {
    const c = a+b
    callback(c)
}, 2000);
}

add(1,4,(sum) => {
    console.log(sum)
})
