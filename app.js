let english=false;
const languageButton=document.getElementById("language");
languageButton.addEventListener("click",()=>{
 english=!english;
 document.documentElement.lang=english?"en":"ar";
 document.documentElement.dir=english?"ltr":"rtl";
 document.body.classList.toggle("ltr",english);
 document.querySelectorAll("[data-ar][data-en]").forEach(el=>{el.textContent=english?el.dataset.en:el.dataset.ar});
 languageButton.innerHTML=english?'AR <span>↗</span>':'EN <span>↗</span>';
 document.getElementById("menuToggle").setAttribute("aria-label",english?"Open menu":"فتح القائمة");
});
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("nav").classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("nav").classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("application").addEventListener("submit",e=>{
 e.preventDefault();
 const f=new FormData(e.currentTarget);
 const message=`CIA MOROCCO RP — RECRUITMENT APPLICATION\nPlayer: ${f.get("player")}\nAge: ${f.get("age")}\nDiscord: ${f.get("discord")}\nDepartment: ${f.get("department")}\nReason: ${f.get("reason")}`;
 const output=document.getElementById("applicationOutput");
 output.textContent=message+"\n\n"+(english?"Application prepared. Copy the text and send it to the server staff.":"الطلب واجد. نسخ النص وصيفطو لإدارة السيرفر.");
 output.classList.add("show");
 const button=document.createElement("button");button.className="button button-outline";button.style.marginTop="12px";button.textContent=english?"Copy application":"نسخ الطلب";
 button.onclick=async()=>{try{await navigator.clipboard.writeText(message);button.textContent=english?"Copied ✓":"تنسخ ✓"}catch{button.textContent=english?"Select the text above to copy":"حدّد النص اللي فوق ونسخو"}};
 output.appendChild(document.createElement("br"));output.appendChild(button);
});
document.getElementById("quiz").addEventListener("submit",e=>{
 e.preventDefault();let score=0;
 ["q1","q2","q3"].forEach(name=>{const selected=e.currentTarget.querySelector(`input[name="${name}"]:checked`);if(selected)score+=Number(selected.value)});
 const out=document.getElementById("quizOutput");
 out.textContent=english?`Your score: ${score}/3 — ${score===3?"Excellent work!":score===2?"Good. Review the rules once more.":"Please review the server rules and try again."}`:`النقطة ديالك: ${score}/3 — ${score===3?"ممتاز!":score===2?"مزيان، راجع القوانين مرة أخرى.":"راجع قوانين السيرفر وعاود جرّب."}`;
 out.classList.add("show");
});
