// {
//   "_id": "string",
//   "text": "string",
//   "username": "string",
//   "createdAt": "2024-06-27T18:46:05.680Z",
//   "likes": [
//     {
//       "_id": "string",
//       "username": "string",
//       "postId": "string",
//       "createdAt": "2024-06-27T18:46:05.680Z"
//     }
//   ]
// }
function getPost(item){
  return `    <div class="card">
      <h5>${item.username}, ${item.createdAt}</h5>
      <h5>likes:${item.likes.length}</h5>
      <div class="fakeimg" style="height:200px;">Image</div>
      <p>${item.text}</p>
    </div>
`
}

function showPosts(list){
  postsList.innerHTML=list.map(getPost).join("")
}

fetch(apiBaseURL+"/api/posts",{
  method: "GET",
  headers: { Authorization: `Bearer ${localStorage.token}` }
}) .then(r=>r.json()).then(showPosts)