let division=document.createElement("div");
division.setAttribute("class","container-fluid");

let navbar=document.createElement("nav");
navbar.setAttribute("class","navbar bg-body-tertiary");

let image=document.createElement("img");
image.setAttribute("id","isro")
image.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-BT3vD_QIfTn7HnfJa8w0jS7BZesjAuUzuA&usqp=CAU")

navbar.append(image);

let head=document.createElement("h1");
head.setAttribute("id","header")
head.innerHTML="Indian Space Research Oraganistation"
navbar.append(head);
division.append(navbar);

let division1=document.createElement("div");

let tab =document.createElement("table");
tab.setAttribute("class","table table-striped ");
tab.innerHTML=`<thead>
                  <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Country Name</th>
                      <th scope="col">Launch Date</th>
                      <th scope="col">Mass</th>
                      <th scope="col">Launcher</th>
                  </tr>
               </thead>`
const tbody=document.createElement("tbody")
tbody.setAttribute("class","tbod");
tab.append(tbody);
division1.append(tab);
division.append(division1);
document.body.append(division);

// let isro=new Promise((resolve, reject) => {
//     let request=new XMLHttpRequest();
//     request.open("GET","https://isro.vercel.app/api/customer_satellites")
//     request.send();
//     request.onload=function(){
//         if(request.status==200){
//         let data= JSON.parse(request.response);
//         resolve(data);
//         }else{
//             reject("some input error");
//         }
//     }
// }) 
// isro.then((res)=>{console.log(res)
fetch('https://isro.vercel.app/api/customer_satellites')
.then((data)=>data.json())
.then((res)=>
    res.customer_satellites.map((ele)=>{ 
    tbody.innerHTML+=`<tr>
                        <td>${ele.id}</td>
                        <td>${ele.country}</td>
                        <td>${ele.launch_date}</td>
                        <td>${ele.mass}</td>
                        <td>${ele.launcher}</td>
                        </tr>`
                    })
)
.catch((rej)=>{console.log(rej)})