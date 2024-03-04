import"./modulepreload-polyfill-9p4a8sJU.js";/* empty css              */import"./navigationUserScreen-2NQdNthr.js";document.addEventListener("DOMContentLoaded",e=>{document.getElementById("janBtn").addEventListener("click",()=>t(1)),document.getElementById("febBtn").addEventListener("click",()=>t(2)),document.getElementById("marBtn").addEventListener("click",()=>t(3)),document.getElementById("aprBtn").addEventListener("click",()=>t(4)),document.getElementById("mayBtn").addEventListener("click",()=>t(5)),document.getElementById("junBtn").addEventListener("click",()=>t(6)),document.getElementById("julBtn").addEventListener("click",()=>t(7)),document.getElementById("augBtn").addEventListener("click",()=>t(8)),document.getElementById("sepBtn").addEventListener("click",()=>t(9)),document.getElementById("octBtn").addEventListener("click",()=>t(10)),document.getElementById("novBtn").addEventListener("click",()=>t(11)),document.getElementById("decBtn").addEventListener("click",()=>t(12)),document.getElementById("year").addEventListener("change",function(){L(this.value)})});let s=null,c="2024",m=[];function E(e,n,d,a){const l=d.padStart(2,"0"),i=a+"-"+l,p=e.filter(r=>r.budgetDate===i),v=n.reduce((r,o)=>(r[o.category.toLowerCase()]=(r[o.category.toLowerCase()]||0)+o.amount,r),{});return p.map(r=>{const o=v[r.category.toLowerCase()]||0,y=o/r.limit*100;return{...r,spent:o,spentPercentage:y.toFixed(2)+"%"}})}function h(){const e=JSON.parse(localStorage.getItem("token"));return e?new Date().getTime()>e.expires?(localStorage.removeItem("token"),null):e.value:null}const g=h();axios.get("https://partialbackendforweb.onrender.com/pages/api/budget",{headers:{Authorization:`Bearer ${g}`}}).then(e=>{m=e.data}).catch(e=>{console.error("Error retrieving budget data:",e)});async function B(){try{return(await axios.get("https://partialbackendforweb.onrender.com/pages/api/expenses/retrieve",{params:{month:s,year:c},headers:{Authorization:`Bearer ${g}`}})).data.expenses}catch(e){return console.error("Error retrieving data:",e),[]}}async function f(e){if(!s||!c)return;const n=await B();e=E(e,n,s,c);const d=document.getElementById("budgetList");d.innerHTML="",e.forEach(a=>{const l=document.createElement("li"),i=a.spent/a.limit*100;l.innerHTML=`
      <div class="flex gap-5 p-2 my-2">
        <div>
          <img src="../Images/avatar-anisha.png" class="rounded-full w-10 h-10 mb-2 ml-2" />
        </div>
        <div class="flex flex-col gap-1 w-96">
          <div class="flex justify-between gap-2">
            <h5 class="dark:text-white">${a.category}</h5>
            <p class="dark:text-white">$${a.limit}</p>
          </div>
          <div class="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
            <div class="bg-green-600 text-xs h-4 rounded-full text-center p-0.5 leading-none dark:bg-green-500 dark:text-white" style="width: ${i}%">
              $${a.spent}
            </div>
          </div>
        </div>
        <div class="flex items-center">
          <a href="budgetCategoryChanger.html" class="text-blue-500">Edit Budget</a>
        </div>
      </div>
    `,d.appendChild(l)})}const u=document.getElementById("year"),k=new Date().getFullYear();for(let e=k;e>=1970;e--){const n=document.createElement("option");n.value=e,n.textContent=e,u.appendChild(n)}u.value="2024";function L(e){u.value=e,c=e.toString()}function t(e){c?(console.log("Selected Year:",c),console.log("Selected Month:",e),s=e.toString(),f(m)):console.log("Please select a year first")}document.getElementById("month").addEventListener("change",e=>{const n=e.target.value;t(n)});
