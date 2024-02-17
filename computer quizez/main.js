function getParameter(x) {
     params = window.location.href.split("?")[1].split("&");
     for (i = 0; i < params.length; i++) {
          // ["id","example"]
          e = params[i].split("=");
          if (e[0] == x) {
               return e[1];
          }
     }
}
var q = document.getElementById("q")
var a1 = document.getElementById("a1")
var a2 = document.getElementById("a2")
var a3 = document.getElementById("a3")
var a4 = document.getElementById("a4")
var id = getParameter("id")

const Data = {
     "l1": {
          "q": "what the real name of a CPU",
          "a1": "Central Processing Unit",
          "a2": "Central Program Unit",
     },
     "l2":{
          "q":"what the part in computer hardware called 'brain' ",
          "a1":"MotherBourd",
          "a2":"Central Processing Unit (CPU)",
          "a3":"Fans",
     },
     "l3":{
          "q":"what is (HDD)",
          "a1":"Hard disk drive",
          "a2":"hardware disk drive",
          "a3":"hardware drive disk",
          "a4":"hard drive disk",
     },
     "l4":{
          "q":"what is (SSD)",
          "a1":"Solid-state drive",
          "a2":"soft state drive",
     },
     "l5":{
          "q":"This is the main circuit board that connects all of the other components of the computer.",
          "a1":"CPU",
          "a2":"SSD",
          "a3":"HDD",
          "a4":"MotherBourd",
     },
     "l6":{
          "q":"This converts AC power from the wall outlet to DC power that the computer components can use",
          "a1":"power supply",
          "a2":"Storage devices",
     },
     "l7":{
          "q":" What Is (GPU)",
          "a1":"Graphics processing unit",
          "a2":"Graphics program unit",
     },
     "l8":{
          "q":"Volatile memory that loses its contents when the computer is turned off. It's used for storing data and instructions that the CPU needs to access quickly",
          "a1":"Random access memory (RAM)",
          "a2":"Hard disk drive (HDD)",
          "a3":"Solid-state drive (SSD)",
          "a4":"Power Supply Unit (PSU)",
     },
     "l9":{
         "q":"The physical housing that contains all the internal components of the computer.",
         "a1":"Case",
         "a2":"Cooling system",
         "a3":"Network adapter",
     },
     "l10":{
          "q":"Stores data and programs.",
          "a1":"(RAM) OR (HDD) OR (SSD)",
          "a2":"(SSD) OR (HHD)",
     }
}
// l1
if (id === "E245b2fa-A392-4d22-Aacb-164a2c038348") {
     console.log("your id is : " + id)
     q.innerHTML = Data.l1.q
     a1.innerHTML = Data.l1.a1
     a2.innerHTML = Data.l1.a2
     function correct() {
          this.style.backgroundColor = "#0077b7"
          this.style.color = "#fff"
          setTimeout(() => {
               location.href = "/computer%20quizez/index.html?id=D8bcd284-5222-49b6-86e1-12b09c3876f5"
          }, 3000)
     }
     function notcorrect() {
          this.style.backgroundColor = "red"
          this.style.color = "#fff"
          setTimeout(() => {
               location.href = "/computer%20quizez/index.html?id=D8bcd284-5222-49b6-86e1-12b09c3876f5"
          }, 3000)
     }
     a1.addEventListener("click",correct)
     a2.addEventListener("click",notcorrect)
}
//l2
if(id === "D8bcd284-5222-49b6-86e1-12b09c3876f5"){
     console.log("your id is : " + id)
     q.innerHTML = Data.l2.q
     a1.innerHTML = Data.l2.a1
     a2.innerHTML = Data.l2.a2
     a3.innerHTML = Data.l2.a3
     function correct(){
               this.style.backgroundColor = "#0077b7"
               this.style.color = "#fff"
               setTimeout(()=>{
                    location.href = "/computer%20quizez/index.html?id=8801e90d-5d4d-4f3b-B9ad-6f0658b9b45f"
               },3000)
     }
     function notcorrect(){
               this.style.backgroundColor = "red"
               this.style.color = "#fff"
               setTimeout(()=>{
                    location.href = "/computer%20quizez/index.html?id=8801e90d-5d4d-4f3b-B9ad-6f0658b9b45f"
               },3000)
     }
     a1.addEventListener("click",notcorrect)
     a2.addEventListener("click",correct)
     a3.addEventListener("click",notcorrect)
}
//l3
if(id === "8801e90d-5d4d-4f3b-B9ad-6f0658b9b45f"){
     console.log("your id is : " + id)
     q.innerHTML = Data.l3.q
     a1.innerHTML = Data.l3.a1
     a2.innerHTML = Data.l3.a2
     a3.innerHTML = Data.l3.a3
     a4.innerHTML = Data.l3.a4
     function correct(){
               this.style.backgroundColor = "#0077b7"
               this.style.color = "#fff"
               setTimeout(()=>{
                    location.href = "/computer%20quizez/index.html?id=Bfa3a290-A99c-450e-8386-A856917dac15"
               },3000)
     }
     function notcorrect(){
               this.style.backgroundColor = "red"
               this.style.color = "#fff"
               setTimeout(()=>{
                    location.href = "/computer%20quizez/index.html?id=Bfa3a290-A99c-450e-8386-A856917dac15"
               },3000)
     }
     a1.addEventListener("click",correct)
     a2.addEventListener("click",notcorrect)
     a3.addEventListener("click",notcorrect)
     a4.addEventListener("click",notcorrect)
}
//l4
if(id === "Bfa3a290-A99c-450e-8386-A856917dac15"){
     console.log("your id is : " + id)
     q.innerHTML = Data.l4.q
     a1.innerHTML = Data.l4.a1
     a2.innerHTML = Data.l4.a2
     function correct(){
               this.style.backgroundColor = "#0077b7"
               this.style.color = "#fff"
               setTimeout(()=>{
                    location.href = "/computer%20quizez/index.html?id=1294f317-Bfc6-4508-A461-F2616b976e82"
               },3000)
     }
     function notcorrect(){
               this.style.backgroundColor = "red"
               this.style.color = "#fff"
               setTimeout(()=>{
                    location.href = "/computer%20quizez/index.html?id=1294f317-Bfc6-4508-A461-F2616b976e82"
               },3000)
     }
     a1.addEventListener("click",correct)
     a2.addEventListener("click",notcorrect)
}
//l5
if(id === "1294f317-Bfc6-4508-A461-F2616b976e82"){
     console.log("your id is : " + id)
     q.innerHTML = Data.l5.q
     a1.innerHTML = Data.l5.a1
     a2.innerHTML = Data.l5.a2
     a3.innerHTML = Data.l5.a3
     a4.innerHTML = Data.l5.a4
     function correct(){
               this.style.backgroundColor = "#0077b7"
               this.style.color = "#fff"
               setTimeout(()=>{
                    location.href = "/computer%20quizez/index.html?id=C972e798-943c-44ea-9249-43261a1f59f9"
               },3000)
     }
     function notcorrect(){
               this.style.backgroundColor = "red"
               this.style.color = "#fff"
               setTimeout(()=>{
                    location.href = "/computer%20quizez/index.html?id=C972e798-943c-44ea-9249-43261a1f59f9"
               },3000)
     }
     a1.addEventListener("click",notcorrect)
     a2.addEventListener("click",notcorrect)
     a3.addEventListener("click",notcorrect)
     a4.addEventListener("click",correct)
}
//l6
if(id === "C972e798-943c-44ea-9249-43261a1f59f9"){
     console.log("your id is : " + id)
     q.innerHTML = Data.l6.q
     a1.innerHTML = Data.l6.a1
     a2.innerHTML = Data.l6.a2
     function correct(){
               this.style.backgroundColor = "#0077b7"
               this.style.color = "#fff"
               setTimeout(()=>{
                    location.href = "/computer%20quizez/index.html?id=7b99b968-159b-4ad8-8ec7-46695e74e354"
               },3000)
     }
     function notcorrect(){
               this.style.backgroundColor = "red"
               this.style.color = "#fff"
               setTimeout(()=>{
                    location.href = "/computer%20quizez/index.html?id=7b99b968-159b-4ad8-8ec7-46695e74e354"
               },3000)
     }
     a1.addEventListener("click",correct)
     a2.addEventListener("click",notcorrect)
}
//l7
if(id === "7b99b968-159b-4ad8-8ec7-46695e74e354"){
     console.log("your id is : " + id)
     q.innerHTML = Data.l7.q
     a1.innerHTML = Data.l7.a1
     a2.innerHTML = Data.l7.a2
     function correct(){
               this.style.backgroundColor = "#0077b7"
               this.style.color = "#fff"
               setTimeout(()=>{
                    location.href = "/computer%20quizez/index.html?id=3de2e117-67d7-4ec8-A63e-297bdb1f5f3d"
               },3000)
     }
     function notcorrect(){
               this.style.backgroundColor = "red"
               this.style.color = "#fff"
               setTimeout(()=>{
                    location.href = "/computer%20quizez/index.html?id=3de2e117-67d7-4ec8-A63e-297bdb1f5f3d"
               },3000)
     }
     a1.addEventListener("click",correct)
     a2.addEventListener("click",notcorrect)
}
// l8
if(id === "3de2e117-67d7-4ec8-A63e-297bdb1f5f3d"){
     console.log("your id is : " + id)
     q.innerHTML = Data.l8.q
     a1.innerHTML = Data.l8.a1
     a2.innerHTML = Data.l8.a2
     a3.innerHTML = Data.l8.a3
     a4.innerHTML = Data.l8.a4
     function correct(){
               this.style.backgroundColor = "#0077b7"
               this.style.color = "#fff"
               setTimeout(()=>{
                    location.href = "/computer%20quizez/index.html?id=2ce9b36c-91b7-4b7f-B361-F65b569aecbe"
               },3000)
     }
     function notcorrect(){
               this.style.backgroundColor = "red"
               this.style.color = "#fff"
               setTimeout(()=>{
                    location.href = "/computer%20quizez/index.html?id=2ce9b36c-91b7-4b7f-B361-F65b569aecbe"
               },3000)
     }
     a1.addEventListener("click",correct)
     a2.addEventListener("click",notcorrect)
     a3.addEventListener("click",notcorrect)
     a4.addEventListener("click",notcorrect)
}
//l9
if(id === "2ce9b36c-91b7-4b7f-B361-F65b569aecbe"){
     console.log("your id is : " + id)
     q.innerHTML = Data.l9.q
     a1.innerHTML = Data.l9.a1
     a2.innerHTML = Data.l9.a2
     a3.innerHTML = Data.l9.a3
     function correct(){
               this.style.backgroundColor = "#0077b7"
               this.style.color = "#fff"
               setTimeout(()=>{
                    location.href = "/computer%20quizez/index.html?id=7e0713dc-F902-4004-983b-3a7b2526a7f1"
               },3000)
     }
     function notcorrect(){
               this.style.backgroundColor = "red"
               this.style.color = "#fff"
               setTimeout(()=>{
                    location.href = "/computer%20quizez/index.html?id=7e0713dc-F902-4004-983b-3a7b2526a7f1"
               },3000)
     }
     a1.addEventListener("click",correct)
     a2.addEventListener("click",notcorrect)
     a3.addEventListener("click",notcorrect)
}
//  l10
if(id === "7e0713dc-F902-4004-983b-3a7b2526a7f1"){
     console.log("your id is : " + id)
     q.innerHTML = Data.l10.q
     a1.innerHTML = Data.l10.a1
     a2.innerHTML = Data.l10.a2
     function correct(){
               this.style.backgroundColor = "#0077b7"
               this.style.color = "#fff"
               setTimeout(()=>{
                    location.href = "/index.html"
               },3000)
     }
     function notcorrect(){
               this.style.backgroundColor = "red"
               this.style.color = "#fff"
               setTimeout(()=>{
                    location.href = "/index.html"
               },3000)
     }
     a1.addEventListener("click",correct)
     a2.addEventListener("click",notcorrect)
}