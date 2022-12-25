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



function addEmployee(data,callback){
    setTimeout(()=>{
        Datas.push(data)
        callback()
    },2000)

    console.log(Datas);
}

addEmployee({name:'Toby',profession:'HR'},getEmployees)