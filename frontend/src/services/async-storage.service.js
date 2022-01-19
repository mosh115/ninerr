
export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    postMany
}

function query(entityType, delay = 600) {
    if (entityType === 'user') {

        var entities = JSON.parse(localStorage.getItem(entityType)) || _createUsers()
    } else {

        var entities = JSON.parse(localStorage.getItem(entityType)) || _createGigs()
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject('OOOOPs')
            resolve(entities)
        }, delay)
    })
    // return Promise.resolve(entities)
}

function get(entityType, entityId) {
    return query(entityType)
        .then(entities => entities.find(entity => entity._id === entityId))
}
function post(entityType, newEntity) {
    newEntity._id = _makeId()
    return query(entityType)
        .then(entities => {
            entities.push(newEntity)
            _save(entityType, entities)
            return newEntity
        })
}

function put(entityType, updatedEntity) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
            return updatedEntity
        })
}

function remove(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === entityId)
            entities.splice(idx, 1)
            _save(entityType, entities)
        })
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

function postMany(entityType, newEntities) {
    return query(entityType)
        .then(entities => {
            newEntities = newEntities.map(entity => ({ ...entity, _id: _makeId() }))
            entities.push(...newEntities)
            _save(entityType, entities)
            return entities
        })
}

function _createGigs() {
    console.log('creating demo gigs')

    const gigs = [
        {
            _id: _makeId(),
            title: "I will design your logo",
            price: 12,
            seller: {
                _id: "u101",
                fullname: "Dudu Da",
                avatarUrl: "url",
                level: "basic/premium",
                rate: 4,
                raters: 4067,
            },
            daysToMake: 3,
            description: "Make unique logo...",
            imgUrls: [],
            categories: [
                "logo-design",
                "artisitic",
                "proffesional",
                "accessible"
            ]
        },
        {
            _id: _makeId(),
            title: "I will design your website",
            price: 500,
            seller: {
                _id: "u102",
                fullname: "Puki Ma",
                avatarUrl: "url",
                level: "basic/premium",
                rate: 4.7,
                raters: 562,
            },
            daysToMake: 7,
            description: "Make unique website...",
            imgUrls: [],
            categories: [
                "logo-design",
                "artisitic",
                "proffesional",
                "accessible"
            ]
        }
    ]

    localStorage.setItem('gig', JSON.stringify(gigs))
    return gigs
}
function _createUsers() {
    console.log('creating demo users')

    const users = [
        {
            _id: _makeId(),
            fullname: "User 1",
            imgUrl: "/img/img1.jpg",
            // isAdmin: false,
            username: "user1",
            password: "secret",
            isSeller: false,

            level: "basic/premium",
            reviews: [
                {
                    id: _makeId(),
                    txt: "Very kind and works fast",
                    rate: 4,
                    by: {
                        _id: "u102",
                        fullname: "user2",
                        imgUrl: "/img/img2.jpg"
                    }
                }
            ],
        }

    ]


    localStorage.setItem('user', JSON.stringify(users))
    return users
}