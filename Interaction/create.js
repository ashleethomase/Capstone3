postMessage.onclick=e=>{
  fetch(apiBaseURL+"/api/posts",{
    method: "POST", 
    body:JSON.stringify({
        "text": messageText.value
    }),
    headers: { 
      Authorization: `Bearer ${localStorage.token}`,
      "Content-Type":"application/json"
    }
  }) .then(r=>r.json()).then(d=>window.close())
}