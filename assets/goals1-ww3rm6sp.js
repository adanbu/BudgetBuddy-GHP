import"./modulepreload-polyfill-9p4a8sJU.js";/* empty css              */import"./navigationUserScreen-2NQdNthr.js";document.addEventListener("DOMContentLoaded",function(){const n=localStorage.getItem("token");if(n){const a=JSON.parse(n).value;axios.get("https://partialbackendforweb.onrender.com/pages/userHome",{headers:{Authorization:`Bearer ${a}`}}).then(t=>{console.log("Response received:",t.data);const d=t.data.goals,r=e=>{const o=e.amountSaved/e.amount*100;return e.amount-e.amountSaved,`
        <div class="shadow p-2 m-2 dark:bg-gray-900 rounded-md">
            <div class="text-xl font-bold">${e.name}</div>
            Goal amount: $${e.amount}<br>Amount saved: $${e.amountSaved}
            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-50 shadow">
                <div class="bg-lime-500 text-xs font-medium text-gray-50 text-center font-bold p-0.5 leading-none rounded-full" style="width: ${o}%"> ${o}%</div>
            </div>
        </div>
    `};(()=>{const e=document.getElementById("goalsContainer");e.innerHTML="",d.forEach(o=>{e.insertAdjacentHTML("beforeend",r(o))}),e.insertAdjacentHTML("beforeend",`
        <button id="addGoalButton" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add Goal</button>
    `),document.getElementById("addGoalButton").addEventListener("click",()=>{console.log("Add Goal button clicked")})})()}).catch(t=>{console.error("Error occurred:",t)})}else console.error("Token not found in localStorage")});
