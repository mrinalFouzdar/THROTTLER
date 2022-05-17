const getdata=(name)=>{
 let data = document.getElementById("input")
 console.log(data.value)
//  console.log(name)
}

const  throttel= (callback,dealy)=>{
    let lasttime = 0
    return function(...arg){
        // console.log(arguments)
        if(Date.now() - lasttime >= dealy){
            lasttime = Date.now();
            callback(...arg)
        }
    }
}

let throttlerfun = throttel(getdata,1000)
// throttlerfun(["mrian","ram"])