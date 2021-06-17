
// 最初にページを読み込んだ時に実行される関数

const indexModule = (() => {
    const path = window.location.pathname

    //共通のイベントリスナー
    
    switch(path) {
        case '/app/public/management.html':
            document.getElementById('search-btn').addEventListener('click', () => {
                const value = document.getElementById('search').value
                window.location.href = `/app/public/search.html?uid=${value}`
            })
            document.getElementById('sp-search-btn').addEventListener('click', () => {
                const value = document.getElementById('sp-search').value
                window.location.href = `/app/public/search.html?uid=${value}`
            })
            return usersModules.fetchAllUsers()
                
        case '/app/public/search.html':
            const uid = window.location.search.split('?uid=')[1]
            
            document.getElementById('delete-btn').addEventListener('click', () => {
                usersModules.deleteUser(uid)
                window.location.href = "/app/public/management.html"
            })
            
            return usersModules.setExistingUser(uid)
        }
})()

