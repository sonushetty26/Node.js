//os module(operating system)

const os = require('os')

const user = os.userInfo()
console.log('user info =' , user)

//uptime
console.log(`uptime =`, os.uptime())

const currOs = {   // instead of writing in object we can also write like uptime like single single also we can write
    name : os.type(),
    release : os.release(),
    totalMemory : os.totalmem(),
    freMemory : os.freemem(),
    arch : os.arch(),
    cup : os.cpus(),
    avgLoad : os.loadavg()
}

console.log('currnet os =' , currOs)