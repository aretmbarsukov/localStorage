let e=document.querySelector(".form-js"),t=document.querySelector(".clear-btn"),n=document.querySelector(".contact-list"),l=document.querySelector(".contacts-empty"),a="contacts",r=JSON.parse(localStorage.getItem(a))||[];function u(){localStorage.setItem(a,JSON.stringify(r))}function m(){if(n){if(n.innerHTML="",!r||0===r.length){l&&(l.style.display="block");return}l&&(l.style.display="none"),r.forEach((e,t)=>{let l=document.createElement("li");l.innerHTML=`
            <span>${e.name} ${e.surname} \u{2014} ${e.email} \u{2014} ${e.tel}</span>
            <div>
                <button class="delete-btn" data-index="${t}">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
            </div>
        `,n.appendChild(l)})}}e.addEventListener("submit",t=>{t.preventDefault();let n={name:e.elements.name.value.trim(),surname:e.elements.surname.value.trim(),email:e.elements.email.value.trim(),tel:e.elements.tel.value.trim()};n.name&&n.surname&&n.email&&n.tel&&(r.push(n),u(),m(),e.reset())}),t.addEventListener("click",()=>{r=[],localStorage.removeItem(a),m()}),m(),n&&n.addEventListener("click",e=>{let t=e.target;if(t.matches(".delete-btn")){let e=Number(t.dataset.index);Number.isNaN(e)||(r.splice(e,1),u(),m())}});
//# sourceMappingURL=localStorage.fcf73e0d.js.map
