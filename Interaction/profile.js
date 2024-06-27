if(!localStorage.token){
  location="/UserAccount/"
}

username.innerText=localStorage.username;
fetch(apiBaseURL+"/api/users/"+localStorage.username,{
  headers:{Authorization: `Bearer ${localStorage.token}`}
}).then(r=>r.json()).then(data=>{
  displayBio.innerText=data.bio
})
saveProfile.onclick=e=>{
  fetch(apiBaseURL+"/api/users/"+localStorage.username,{
    method:"PUT",
    body:JSON.stringify({
      "bio": enterBio.value
    }),
    headers:{Authorization: `Bearer ${localStorage.token}`,"Content-Type":"application/json"}
  }).then(r=>r.json()).then(data=>{
    location=location //refreshing page
  })  
}