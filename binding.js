// calll

let userdetails1={
    name:'sam',
    afe:89,
    role:'HR',
    printDetails:function(){
        console.log(this);
    }
}

// userdetails1.printDetails()

let userdetails2={
    name:'pam',
    afe:98,
    role:'COO',
   
}

// userdetails1.printDetails.call(userdetails2)

//borrow funtion

let getdetails=function(city,country){
    console.log(`${this.name} ${city} ${country}`);
}

getdetails.call(userdetails2,'new Jersey','USA')
getdetails.call(userdetails1,'delhi','India')

// apply


getdetails.apply(userdetails2,['florida','nepal'])
getdetails.apply(userdetails1,['berlin','Russia'])

// bind

let myFunc=getdetails.bind(userdetails2,'Israel','japan')
myFunc()
