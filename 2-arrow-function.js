// const square = function(x)
// {
//     return x*x
// }

// const square = (x) => x * x

// console.log(square(3))
 
const event = {
    name: 'Party',
    guestlist: ['Ritik','Raj','ARO'],
    printGuestList () {
        console.log('The guest list for '  + this.name + '\n ')
        this.guestlist.forEach((guest) => {
            console.log(guest + ' is attending the ' + this.name)
        })
    }
}

event.printGuestList()