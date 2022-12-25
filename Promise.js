let Datas=[
    {name:'michael Scott',profession:'Manager'},
    {name:'Dwight schrutte',profession:'Sales man'},

]

function getEmployees(){

    let employeee='';
    setTimeout(()=>{
        Datas.forEach((emp,index)=>{
            employeee+=`<li>${emp.name}</li>`
        })
        document.body.innerHTML=employeee

    },1000)
}



function addEmployee(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            Datas.push(data)
            console.log(Datas);
            let error=true
            if(!error){
                resolve('set hain boss')
            }
            else{
                reject('L lag gaye')
            }
           
        },2000)
    })
   

    
}

addEmployee({name:'Toby',profession:'HR'}).then(getEmployees).catch(err=>console.log(err))