function Submit(){
   var dataEntered=retrieveData()
 var readData= readingDataFromLocalStorage(dataEntered)
 if(dataEntered==false){
    msg.innerHTML="Please enter data"
 }
 else{

 }
insert(readData)

document.getElementById("form").reset()
}

function retrieveData(){
    var name1= document.getElementById("name").value
    var age= document.getElementById("age").value
    var designation=document.getElementById("designation").value
    var priority=document.getElementById("priority").value
    var vaccine=document.getElementById("vaccine").value

    var arr=[name1,age,designation,priority,vaccine]
   if( arr.includes("")){
    return false
   }
   else{
    return arr
   }
   
}

function readingDataFromLocalStorage(dataEntered){
    var n=localStorage.setItem("Name",dataEntered[0])
    var a=localStorage.setItem("Age",dataEntered[1])
    var d=localStorage.setItem("Designation",dataEntered[2])
    var p=localStorage.setItem("Priority",dataEntered[3])
    var v=localStorage.setItem("Vaccine",dataEntered[4])

    var n1=localStorage.getItem("Name",n)
    var a1=localStorage.getItem("Age",a)
    var d1=localStorage.getItem("Designation",d)
    var p1=localStorage.getItem("Priority",p)
    var v1=localStorage.getItem("Vaccine",v)

    var arr=[n1,a1,d1,p1,v1];
    return arr

}

function insert(readData){
   var row=table.insertRow()
   row.insertCell(0).innerHTML=readData[0]
   row.insertCell(1).innerHTML=readData[1]
   row.insertCell(2).innerHTML=readData[2]
   row.insertCell(3).innerHTML=readData[3]
   row.insertCell(4).innerHTML=readData[4]
   
   row.insertCell(5).innerHTML=`<button  onclick=otp(this)>Vaccinate</button> <button onclick=remove(this)>Delete</button>`
   
}

function otp(generate){
var randomotp=["1234","5678","4324","2321"]
generate(randomotp[Math.floor(Math.random()*4)])
alert(randomotp)
}

function remove(td){
   var ans= confirm("Are you sure you want to delete this record")
   if(ans==true){
    row=td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex)
   }
  
    
}