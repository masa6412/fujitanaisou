// usersリソースのapiを実行する
const usersModules = (() => {
    const BASE_URL = "http://localhost:3000/api/v1/users"
    const headers = new Headers()

    headers.set('Content-Type', 'application/json')

    const handleError = async (res) => {
        
        switch (res.status) {
            case 200:
            break;

            case 404:
            alert('指定されたidを持つユーザーが見つかりません')
            window.location.href = '/app/public/management.html'
            break;

            default:
            alert('例外的なエラーが発生しました')
            break;
        }
    }
    
    return {
        fetchAllUsers: async () => {
            const res = await fetch(BASE_URL)
            const users = await res.json()
            
            for(let i = 0; i < users.length; i++) {
                const user = users[i]
                
                const body = `<tr>
                                <th scope="row">${user.id}</th>
                                <td>${user.name}</td>
                                <td style="over-flow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100px; overflow-y: scroll;">${user.kana}</td>
                                <td style="over-flow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100px; overflow-y: scroll;">${user.addess}</td>
                                <td style="over-flow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100px; overflow-y: scroll;">${user.company}</td>
                                <td style="over-flow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100px; overflow-y: scroll;">${user.department}</td>
                                <td style="over-flow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100px; overflow-y: scroll;">${user.phoneNumber}</td>
                                <td style="over-flow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100px; overflow-y: scroll;">${user.post}</td>
                                <td style="over-flow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100px; overflow-y: scroll;">${user.post2}</td>
                                <td style="over-flow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100px; overflow-y: scroll;">${user.created_at}</td>
                                <td style="over-flow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100px; overflow-y: scroll;">${user.contents}</td>
                                <td><a href="search.html?uid=${user.id}">詳細</a></td>
                            </tr>`

                const body_sp = `<tr>
                                <td style="over-flow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100px; overflow-y: scroll;">${user.id}</td>
                                <td style="over-flow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100px; overflow-y: scroll;">${user.name}</td>
                                <td style="over-flow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100px; overflow-y: scroll;">${user.addess}</td>
                                <td><a href="search.html?uid=${user.id}">詳細</a></td>
                            </tr>`
                document.getElementById('users-list').insertAdjacentHTML('beforeend', body)
                document.getElementById('sp-users-list').insertAdjacentHTML('beforeend', body_sp)
            }
        },
        setExistingUser: async (value) => {
           
            const res = await fetch(BASE_URL + '/' + value)
            const resJson = await res.json()
            
            let body = `<tr>
                            <td>${resJson.id}</td>
                            <td>${resJson.name}</td>
                            <td>${resJson.kana}</td>
                            <td>${resJson.addess}</td>
                            <td>${resJson.company}</td>
                            <td>${resJson.department}</td>
                            <td>${resJson.phoneNumber}</td>
                            <td>${resJson.post}</td>
                            <td>${resJson.post2}</td>
                            <td>${resJson.created_at}</td>
                        </tr>`

            let bodyContent = `<tr>
                                    <td>${resJson.contents}</td>
                                </tr>`

            let sp_body =   `<tr>
                                <td>${resJson.id}</td>
                                <td>${resJson.name}</td>
                                <td>${resJson.kana}</td>
                                <td>${resJson.addess}</td>
                            </tr>`

            let sp_body_2nd = `<tr>
                                <td>${resJson.company}</td>
                                <td>${resJson.department}</td>
                                <td>${resJson.phoneNumber}</td>
                            </tr>`

            let sp_body_3rd = `<tr>
                                <td>${resJson.post}</td>
                                <td>${resJson.post2}</td>
                                <td>${resJson.created_at}</td>
                            </tr>`
            let sp_contents = `<tr>
                                <td>${resJson.contents}</td>
                            </tr>`

               
            document.getElementById('search-list').insertAdjacentHTML('beforeend', body)
            document.getElementById('contents-list').insertAdjacentHTML('beforeend', bodyContent)
            document.getElementById('sp-body').insertAdjacentHTML('beforeend', sp_body)
            document.getElementById('sp-body-2nd').insertAdjacentHTML('beforeend', sp_body_2nd)
            document.getElementById('sp-body-3rd').insertAdjacentHTML('beforeend', sp_body_3rd)
            document.getElementById('sp-contents').insertAdjacentHTML('beforeend', sp_contents)
            
            return handleError(res)
        },
        createUser: async () => {
            const name = document.getElementById('name').value
            const kana = document.getElementById('kana').value
            const addess = document.getElementById('addess').value
            const company = document.getElementById('company').value
            const departure = document.getElementById('departure').value
            const phoneNumber = document.getElementById('phoneNumber').value
            const post = document.getElementById('post').value
            const post2 = document.getElementById('post2').value
            const contents = document.getElementById('contents').value
            

            const body = {
                name: name, kana: kana, addess: addess, company: company, departure: departure,
                phoneNumber: phoneNumber, post: post, post2: post2, contents: contents
            }
            
            const res = await fetch(BASE_URL, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body)
            })
            const resJson = await res.json()
            alert(resJson.message)
        },

        deleteUser: async (uid) => {
            const ret = window.confirm('このユーザーを削除しますか？')
            if (!ret) {
                return false;
            } else {
                const res = await fetch(BASE_URL + '/' + uid, {
                    method: "DELETE",
                    headers: headers
                })
                const resJson = await res.json()
                alert(resJson.message)
            }
        }
    }
})()
