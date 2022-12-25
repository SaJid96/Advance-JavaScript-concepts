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
            let error=false
            if(!error){
                resolve('set hain boss')
            }
            else{
                reject('L lag gaye')
            }
           
        },2000)
    })
   

    
}

async function start(){
    await addEmployee({name:'Toby',profession:'HR'},getEmployees)
    getEmployees()

}

start()

async function tester(){
    const val=await new Promise((res,rej)=>setTimeout(()=>res(3),2000))
    console.log(val);
}

tester()

async function fail(){

   try{
    const val=await new Promise((res,rej)=>setTimeout(()=>rej(new Error('it sucks')),2000))

   }
   catch(err){

    console.log(err);
   }
}
fail()
