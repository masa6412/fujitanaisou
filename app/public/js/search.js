// searchリソースのapiを実行する
// const searchModule = (() => {
//     const BASE_URL = "http://localhost:3000/api/v1/search"
//     return {
//         searchUser: async() => {
//             const userId = document.getElementById('search').value
//             const res = await fetch(BASE_URL + '?uid=' + userId)
//             const users = await res.json()

//             for (let i = 0; i < users.length; i++) {
//                  const user = users[i]
//                  let body = ""

//                 if (Number(userId) === user.id) {
//                         body +=    `<tr>
//                                         <td>${user.id}</td>
//                                         <td>${user.name}</td>
//                                         <td>${user.kana}</td>
//                                         <td>${user.addess}</td>
//                                         <td>${user.company}</td>
//                                         <td>${user.department}</td>
//                                         <td>${user.phoneNumber}</td>
//                                         <td>${user.post}</td>
//                                         <td>${user.post2}</td>
//                                         <td>${user.contents}</td> 
                                        
//                                     </tr>`
//                     document.getElementById('users-list').insertAdjacentHTML('beforeend', body)
//                 }
//             }
//         }
//     }
// })()
