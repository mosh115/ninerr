// import { storageService } from './async-storage.service'
import { utilService } from './util.service'
import { httpService } from './http.service'
import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_LOGIN, SOCKET_EMIT_LOGOUT } from './socket.service'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
var gWatchedUser = null;

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    getUsers,
    getById,
    remove,
    update,

}

// To help debugging from console
window.userService = userService


function getUsers() {
    // return storageService.query('user')
    return httpService.get(`user`)
}

async function getById(userId) {
    // console.log(userId);
    // const user = await storageService.get('user', userId)
    const user = await httpService.get(`user/${userId}`)
    gWatchedUser = user;
    return user;
}
function remove(userId) {
    // return storageService.remove('user', userId)
    return httpService.delete(`user/${userId}`)
}

async function update(user) {
    // console.log(' in service', user);
    // await storageService.put('user', user)
    const newUser = await httpService.put(`user/${user._id}`, user)
    // console.log('user after db', newUser);
    // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === newUser._id) _saveLocalUser(newUser)
    return newUser;
}

async function login(userCred) {
    // const users = await storageService.query('user')
    // const user = users.find(user => user.username === userCred.username)
    // return _saveLocalUser(user)

    const user = await httpService.post('auth/login', userCred)
    // socketService.on('NEW_ORDER', addNewNotification)
    socketService.emit(SOCKET_EMIT_LOGIN, user._id);
    if (user) return _saveLocalUser(user)
}
async function signup(userCred) {
    userCred.createdAt = Date.now()
    userCred.avatarColor = _randomAvatarColor();
    console.log(userCred);
    // const user = await storageService.post('user', userCred)
    const user = await httpService.post('auth/signup', userCred)
    socketService.emit(SOCKET_EMIT_LOGIN, user._id);
    // socketService.on('NEW_ORDER', addNewNotification)
    return _saveLocalUser(user)
}
async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // socketService.emit(SOCKET_EMIT_LOGOUT);
    return await httpService.post('auth/logout')
}

// async function changeScore(by) {
//     const user = getLoggedinUser()
//     if (!user) throw new Error('Not loggedin')
//     user.score = user.score + by || by
//     await update(user)
//     return user.score
// }


function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}

const _randomAvatarColor = () => {
    const colors = ['#0F2347', '#1C3F6E', '#2E67A0', '#5AACCF', '#80C271'];
    let randIdx = utilService.getRandomIntInclusive(0, colors.length - 1);
    // console.log(colors[randIdx]);
    return colors[randIdx];
}

// (async ()=>{
//     await userService.signup({fullname: 'Puki Norma', username: 'user1', password:'123',score: 10000, isAdmin: false})
//     await userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 10000, isAdmin: true})
//     await userService.signup({fullname: 'Muki G', username: 'muki', password:'123', score: 10000})
// })();



// This IIFE functions for Dev purposes
// It allows testing of real time updates (such as sockets) by listening to storage events
// (async () => {
//     // Dev Helper: Listens to when localStorage changes in OTHER browser

//     // Here we are listening to changes for the watched user (comming from other browsers)
//     window.addEventListener('storage', async () => {
//         if (!gWatchedUser) return;
//         const freshUsers = await storageService.query('user')
//         const watchedUser = freshUsers.find(u => u._id === gWatchedUser._id)
//         if (!watchedUser) return;
//         if (gWatchedUser.score !== watchedUser.score) {
//             console.log('Watched user score changed - localStorage updated from another browser')
//             socketService.emit(SOCKET_EVENT_USER_UPDATED, watchedUser)
//         }
//         gWatchedUser = watchedUser
//     })
// })();

// This is relevant when backend is connected
// (async () => {
//     var user = getLoggedinUser()
//     if (user) socketService.emit('set-user-socket', user._id)
// })();

