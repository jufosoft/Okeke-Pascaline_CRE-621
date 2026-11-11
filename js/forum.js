const key="robolearn_forum_posts";
function loadPosts(){return JSON.parse(localStorage.getItem(key)||"[]")}
function showPosts(){let el=document.querySelector("#posts");if(!el)return;let posts=loadPosts();el.innerHTML=posts.length?posts.slice().reverse().map(p=>`<article class="post"><strong>${escapeHtml(p.title)}</strong><p>${escapeHtml(p.body)}</p><small>Posted by ${escapeHtml(p.name)} • ${new Date(p.date).toLocaleString()}</small></article>`).join(""):"<p class='muted'>No discussions yet. Start the conversation!</p>"}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
let f=document.querySelector("#forum-form");if(f){showPosts();f.onsubmit=e=>{e.preventDefault();let d=new FormData(f),p={name:d.get("name"),title:d.get("title"),body:d.get("body"),date:Date.now()};let a=loadPosts();a.push(p);localStorage.setItem(key,JSON.stringify(a));f.reset();showPosts()}}
