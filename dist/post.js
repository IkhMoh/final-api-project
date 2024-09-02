 function LoginBtnClick() {

     const username = document.getElementById("usernamee").value
     const password = document.getElementById("passwordd").value
     const prams = {
         "username": username,
         "password": password
     }

     const URL = 'https://tarmeezacademy.com/api/v1/login'
     axios.post(URL, prams)
         .then((Response) => {

             localStorage.setItem("token", Response.data.token)
             localStorage.setItem("user", JSON.stringify(Response.data.user))


             var targetEl = document.getElementById('login-modall')
             var myattr = document.createAttribute('data-twe-modal-dismiss')
             targetEl.setAttributeNode(myattr)

             let alertLogin = ` <div id="my-paragraph"
            class="bg-green-200  bottom-8 right-10	 h-16 w-1/3 fixed  rounded-md  flex items-center justify-between pl-3 text-green-600  text-xl">
            <h4 class="">
                Login is successfully
            </h4>

            <span class="[&>svg]:h-6 [&>svg]:w-6 pr-3  ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </span>
        </div>`
             setupNavUi()

             document.getElementById("good").innerHTML = alertLogin
             setTimeout(() => {
                 document.getElementById("my-paragraph").classList.add("hidden");
             }, 3000);

         }).catch((error) => {
             const masege = error.response.data.message

             let alertLogout = ` <div id="my-paragraph"
             class="bg-red-200  bottom-8 right-10	 z-[100000] h-16 w-2/4 fixed  rounded-md  flex items-center justify-between pl-3 text-red-400  text-xl">
             <h4 class="">
                ${masege}
             </h4>
         
             <span class="[&>svg]:h-6 [&>svg]:w-6 pr-3  ">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
             </span>
         </div>`

             document.getElementById("good").innerHTML = alertLogout

             setTimeout(() => {
                 document.getElementById("my-paragraph").classList.add("hidden");
             }, 3000);
         })




 }

 function LogoutBtn() {
     localStorage.removeItem("token")
     localStorage.removeItem("user")
     let alertLogout = ` <div id="my-paragraph"
                class="bg-green-200  bottom-8 right-10	 h-16 w-1/3 fixed  rounded-md  flex items-center justify-between pl-3 text-green-600  text-xl">
                <h4 class="">
                    Logout is successfully
                </h4>

                <span class="[&>svg]:h-6 [&>svg]:w-6 pr-3  ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>
                </div>`
     setupNavUi()

     document.getElementById("good").innerHTML = alertLogout
     setTimeout(() => {
         document.getElementById("my-paragraph").classList.add("hidden");
     }, 3000);
 }

 function setupNavUi() {
     const token = localStorage.getItem("token")
     const logenBtn = document.getElementById("logenBtn")
     const LogoutBtn = document.getElementById("LogoutBtn")
     const addBtn = document.getElementById("addBtn")
     if (token == null) {
         if (addBtn != null) {

             addBtn.style.setProperty("display", "none", "important")
         }

         logenBtn.style.setProperty("display", "flex", "important")
         LogoutBtn.style.setProperty("display", "none", "important")
     } else {
         const user = getUser()

         document.getElementById("user").innerHTML = user.username
         document.getElementById("imgpro").src = user.profile_image

         if (addBtn != null) {

             addBtn.style.setProperty("display", "flex", "important")
         }
         logenBtn.style.setProperty("display", "none", "important")
         LogoutBtn.style.setProperty("display", "flex", "important")

     }




 }

 function regester() {
     const name = document.getElementById("name").value
     const username = document.getElementById("username").value
     const password = document.getElementById("password").value
     const image = document.getElementById("imgeprofaile").files[0]


     let formData = new FormData()
     formData.append("name", name)
     formData.append("username", username)
     formData.append("password", password)
     formData.append("image", image)


     const URL = 'https://tarmeezacademy.com/api/v1/register'



     axios.post(URL, formData, {
             headers: {
                 "Content-Type": "multipart/form-data",
             }
         })
         .then((Response) => {
             localStorage.setItem("token", Response.data.token)
             localStorage.setItem("user", JSON.stringify(Response.data.user))
             const targetEl = document.getElementById('regester-modall')
             const myattr = document.createAttribute('data-twe-modal-dismiss')
             targetEl.setAttributeNode(myattr)
             let alertLogin = ` <div id="my-paragraph"
            class="bg-green-200  bottom-8 right-10	 h-16 w-1/3 fixed  rounded-md  flex items-center justify-between pl-3 text-green-600  text-xl">
            <h4 class="">
                Register is successfully
            </h4>

            <span class="[&>svg]:h-6 [&>svg]:w-6 pr-3  ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </span>
        </div>`
             setupNavUi()

             document.getElementById("good").innerHTML = alertLogin
             setTimeout(() => {
                 document.getElementById("my-paragraph").classList.add("hidden");
             }, 3000);

         }).catch((error) => {
             const masege = error.response.data.message

             let alertLogout = ` <div id="my-paragraph"
             class="bg-red-200  bottom-8 right-10	 z-[100000] h-16 w-2/4 fixed  rounded-md  flex items-center justify-between pl-3 text-red-400  text-xl">
             <h4 class="">
                ${masege}
             </h4>
         
             <span class="[&>svg]:h-6 [&>svg]:w-6 pr-3  ">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
             </span>
         </div>`

             document.getElementById("good").innerHTML = alertLogout

             setTimeout(() => {
                 document.getElementById("my-paragraph").classList.add("hidden");
             }, 3000);
         })





 }

 function addNewPoste() {
     const title = document.getElementById("title").value
     const body = document.getElementById("body").value
     const image = document.getElementById("imge").files[0]


     let formData = new FormData()
     formData.append("title", title)
     formData.append("body", body)
     formData.append("image", image)


     const token = localStorage.getItem("token")

     let URL = 'https://tarmeezacademy.com/api/v1/posts'
     const headers = {
         "Content-Type": "multipart/form-data",
         "authorization": `Bearer ${token}`
     }

     axios.post(URL, formData, {
             headers: {
                 "Content-Type": "multipart/form-data",
                 "authorization": `Bearer ${token}`
             }
         })
         .then((Response) => {
             var targetEl = document.getElementById('addNew-modal')
             var myattr = document.createAttribute('data-twe-modal-dismiss')
             targetEl.setAttributeNode(myattr)
             let alertLogin = ` <div id="my-paragraph"
                 class="bg-green-200 z-[222222] bottom-8 right-10	 h-16 w-1/3 fixed  rounded-md  flex items-center justify-between pl-3 text-green-600  text-xl">
                 <h4 class="">
                      Creat a new post is successfully
                 </h4>

                 <span class="[&>svg]:h-6 [&>svg]:w-6 pr-3  ">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                     </svg>
                 </span>
             </div>`
             getPost()
             setupNavUi()

             document.getElementById("good").innerHTML = alertLogin
             setTimeout(() => {
                 document.getElementById("my-paragraph").classList.add("hidden");
             }, 3000);
         }).catch((error) => {

             const masege = error.response.data.message

             let alertcreatpost = ` <div id="my-paragraph"
             class="bg-red-200  bottom-8 right-10	 z-[100000] h-16 w-2/4 fixed  rounded-md  flex items-center justify-between pl-3 text-red-400  text-xl">
             <h4 class="">
                ${masege}
             </h4>
         
             <span class="[&>svg]:h-6 [&>svg]:w-6 pr-3  ">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
             </span>
         </div>`

             document.getElementById("good").innerHTML = alertcreatpost

             setTimeout(() => {
                 document.getElementById("my-paragraph").classList.add("hidden");
             }, 3000);
         })

 }

 function getUser() {
     let user = null
     const userste = localStorage.getItem("user")
     if (userste != null) {
         user = JSON.parse(userste)
     }
     return user
 }


 let urlprams = new URLSearchParams(window.location.search)
 var id = urlprams.get("postId")



function clickprofile() {
    const id = getUser()
      
    window.location = `profile.html?userId=${id.id}`
}
 function getPost() {
     axios.get(`https://tarmeezacademy.com/api/v1/posts/${id}`)
         .then((Response) => {
             const data = Response.data.data
             const comments = data.comments

             document.getElementById('posts').innerHTML = ""
             document.getElementById('usernameone').innerHTML = data.author.username
             let commentscontent = ``
             for (Comment of comments) {

                 commentscontent += `<div id="comend" class="p-2 bg-sky-100 py-2 border-b border-gray-300">
                        <div class="flex ">
                            <img src = "${Comment.author.profile_image}" class="h-8 w-8 mr-1.5 rounded-full" alt="">

                            <h1 class="mt-1 font-bold">@${Comment.author.username}</h1>
                        </div>
                        <div>
                        <h4 class=" ">${Comment.body}</h4>
                        </div>
                    </div>`

             }
             // document.getElementById("comends").innerHTML = commentscontent


             let content = ` <div   id="post" class="mb-4 rounded shadow mt-6   bg-white    shadow-secondary-1 ">
                      <div onclick = "userclick(${data.author.id})" class = " border-b-2 font-bold border-gray-400 px-3 py-1  dark:border-white/10" >
                          <img src="${data.author.profile_image}" class="h-10 w-10 mr-1 border-2 border-gray-500 rounded-full inline" alt="">
                          <span class="mt-2">
                             @${data.author.username}
                          </span>

                      </div>
                      <div class="p-1">
                          <img class="h-72  w-full rounded-md " src="${data.image}" alt="error 404">
                          <h1 class=" dark:border-white/10 dark:text-neutral-300  text-surface/75">
                             ${data.created_at}
                          </h1>
                          <h5 class="text-black font-bold text-2xl">
                              ${data.title}
                          </h5>
                          <p class="border-gray-500 pb-2 border-b-2">
                               ${data.body}
                          </p>
                      </div>

                      <div class="flex">
                         <i class="fa-solid fa-pen pl-4 pt-2"></i>
                          <p class="px-2 pt-1 pb-3">
                              (${data.comments_count}) comments

                          </p>
                          <span id"tags-${data.id}">

                          </span>
                      </div>
                      <div id = "comends" class = "rounded-b-lg" >
                      ${commentscontent}
                      </div>
                      <div  id="hi" class ="flex bg-sky-100">
                        <input id="add-comment" placeholder = "add your comment here.."  type = "text"
                          class = "rounded border border-gray-500 w-full ml-2 mb-2 pl-2" >
                          <button id="add-btn-comment" onClick="addNewComment()" class="mx-2 bg-blue-600 mb-2 text-white py-1 px-2 font-bold rounded-md ">Send</button>
                      </div>
                  </div>
                  
                  `
             document.getElementById("posts").innerHTML = content
             const tag = `tags-${data.id}`

             for (tag of data.tags) {

                 let tagContent = `<button class="bg-gray-400 rounded-2xl text-white px-3 py-1 ">
                                          ${tag.name}          
                                       </button>`
                 document.getElementById("tag") += tagContent


             }
         })
 }

 function addNewComment() {
     let textComment = document.getElementById("add-comment").value
     let prams = {
         "body": textComment
     }
     let token = localStorage.getItem("token")
     const url = `https://tarmeezacademy.com/api/v1/posts/${id}/comments`
     axios.post(url, prams, {
         headers: {
             "Authorization ": `Bearer ${token}`
         }
     }).then((response) => {
         getPost()
     }).catch((error) => {
         const masege = error.response.data.message

         let alertLogout = ` <div id="my-paragraph"
             class="bg-red-200  bottom-8 right-10	 z-[100000] h-16 w-2/4 fixed  rounded-md  flex items-center justify-between pl-3 text-red-400  text-xl">
             <h4 class="">
                ${masege}
             </h4>
         
             <span class="[&>svg]:h-6 [&>svg]:w-6 pr-3  ">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
             </span>
         </div>`

         document.getElementById("good").innerHTML = alertLogout

         setTimeout(() => {
             document.getElementById("my-paragraph").classList.add("hidden");
         }, 3000);
     })


 }
 function userclick(userid) {
     window.location = `profile.html?userId=${userid}`
 }
 setupNavUi()
 getPost()