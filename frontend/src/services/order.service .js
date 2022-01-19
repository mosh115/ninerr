
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'order'
const listeners = []

export const orderService = {
    query,
    getById,
    save,
    remove,
    getEmptyOrder,
    subscribe

}
window.cs = orderService;


function query() {
    return storageService.query(STORAGE_KEY)
}
function getById(orderId) {
    return storageService.get(STORAGE_KEY, orderId)
}
function remove(orderId) {
    return storageService.remove(STORAGE_KEY, orderId)
}
function save(order) {
    if (order._id) {
        return storageService.put(STORAGE_KEY, order)
    } else {
        order.owner = userService.getLoggedinUser()
        return storageService.post(STORAGE_KEY, order)
    }
}



function subscribe(listener) {
    listeners.push(listener)
}

function _notifySubscribersOrdersChanged(orders) {
    console.log('Notifying Listeners');
    listeners.forEach(listener => listener(orders))
}

window.addEventListener('storage', () => {
    console.log('Storage Changed from another Browser!');
    query()
        .then(orders => {
            _notifySubscribersOrdersChanged(orders)
        })
})





