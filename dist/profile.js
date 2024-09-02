let urlpramss = new URLSearchParams(window.location.search)
 
var id = urlpramss.get("userId")
console.log(id);

function getuser() {

    axios.get(`https://tarmeezacademy.com/api/v1/users/${id}`)
        .then((Response) => {
            const data = Response.data.data
            console.log(data);
            document.getElementById("numpost").innerHTML = data.posts_count
            document.getElementById("numcomment").innerHTML = data.comments_count
            document.getElementById("userdetis").innerHTML = data.username
            document.getElementById("nameprof").innerHTML = data.name
            document.getElementById("userprof").innerHTML = data.username
            document.getElementById("gmailprof").innerHTML = data.email
            document.getElementById("imgdetils").src = data.profile_image
        })
}

function getPosts() {
    

    axios.get(`https://tarmeezacademy.com/api/v1/users/${id}/posts`)
        .then((Response) => {
            const data = Response.data.data
            console.log(data);

            document.getElementById("posts22").innerHTML = ""
            for (const key of data) {

                let contentt = ` <div onClick ="onepost(${key.id})" id="post" class="bg-sky-100 shadow-xl my-6  rounded-lg     shadow-secondary-1 ">
                     <div class="  border-b-2 font-bold border-gray-400 px-3 py-1  dark:border-white/10">
                         <img src="${key.author.profile_image}" class="h-10 w-10 mr-1 border-2 border-gray-500 rounded-full inline" alt="">
                         <span class="mt-2">
                            ${key.author.username}
                         </span>

                     </div>
                     <div class="p-1">
                         <img class="h-72  w-full rounded-md " src="${key.image}" alt="error 404">
                         <h1 class=" dark:border-white/10 dark:text-neutral-300  text-surface/75">
                            ${key.created_at}
                         </h1>
                         <h5 class="text-black font-bold text-2xl">
                             ${key.title}
                         </h5>
                         <p class="border-gray-500 pb-2 border-b-2">
                              ${key.body}
                         </p>
                     </div>

                     <div class="flex">
                        <i class="fa-solid fa-pen pl-4 pt-2"></i>
                         <p class="px-2 pt-1 pb-3">
                             (${key.comments_count}) comments
                             
                         </p>
                         <span id"tags-${key.id}">
                          
                         </span>
                     </div>
                 </div>`
                document.getElementById("posts22").innerHTML += contentt
                //  const tag = `tags-${key.id}`

                //  for (tag of key.tags) {

                //      let tagContent = `<button class="bg-gray-400 rounded-2xl text-white px-3 py-1 ">
                //                          ${tag.name}          
                //                       </button>`
                //      document.getElementById("tag") += tagContent
                //  }

            }
        })
}
getuser()
getPosts()