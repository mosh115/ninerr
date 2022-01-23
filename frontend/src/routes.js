import { HomePage } from './pages/home-page.jsx'
import { AboutUs } from './pages/about-us.jsx'
// import { CarApp } from './pages/car-app.jsx'
import { GigApp } from './pages/gig-app.jsx'
import { GigDetails } from './pages/gig-details.jsx'
import { AddEditGig } from './pages/add-edit-gig.jsx'
import { BuyerDetails } from './pages/buyer-details.jsx'
import { SellerDetails } from './pages/seller-details.jsx'
// import { ReviewApp } from './pages/review-app.jsx'
// import { ChatApp } from './pages/chat-app.jsx'
// import { AdminApp } from './pages/admin-app.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <HomePage />,

    },
    {
        path: 'explore',
        component: <GigApp />,

    },
    {
        path: '/gig/edit/:gigId?',
        component: <AddEditGig />
    },
    {
        path: '/gig/:gigId',
        component: <GigDetails />
    },
    {
        path: '/user',
        component: <BuyerDetails />
    },
    {
        path: '/seller',
        component: <SellerDetails />
    },
    // {
    //     path: 'review',
    //     component: <ReviewApp />,
    //     label: 'Reviews'
    // },
    // {
    //     path: 'chat',
    //     component: <ChatApp />,
    //     label: 'Chat'
    // },
    {
        path: 'about',
        component: <AboutUs />

    },
    // {
    //     path: 'admin',
    //     component: <AdminApp />,
    //     label: 'Admin Only'
    // }
]

export default routes;