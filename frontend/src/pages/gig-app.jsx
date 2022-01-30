import React, { useEffect,useState } from "react"
// import useState from 'react-usestateref'
import { connect } from "react-redux"
import { useLocation, Link } from 'react-router-dom';
import { GigList } from "../cmps/gig-list.jsx"
import { loadGigs, addGig, setFilter } from "../store/gig.actions.js"
import { SelectDelivery } from '../cmps/select-delivery'
import { SelectSellerLevels } from '../cmps/select-seller'
// import { showSuccessMsg } from "../services/event-bus.service.js"

function _GigApp({ loadGigs, gigs, setFilter, storeFilterBy }) {

    console.log(gigs);
    let url = window.location.href;
    console.log('url', url);

    function useQuery() {
        const { search } = useLocation();
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }
    let query = useQuery();

    // const []

    let filterBy = {
        title: '',
        tags: [],
        userId: ''
    }

    const [filterAfterMount, setFilterAfterMount] = useState(filterBy)


    useEffect(() => {
        const filter = query.get("filter")
        if (filter) {
            const idx = filter.indexOf(':')
            const key = filter.slice(0, idx)
            const value = filter.slice(idx + 1)
            if (key === 'tags') filterBy[key] = [...filterBy.tags, value];
            else filterBy[key] = value;
        }
        // console.log(filterBy.title);
        setFilterAfterMount(filterBy)
        setFilter(filterBy)

        const fetchGigs = async () => {
            try {
                const gigs = await loadGigs()
                console.log('from mount, async', gigs);
                setFilteredGigs(gigs)
                // filterGigs();
                // console.log('filtered Gigs from useEffect', filteredGigs);
            }
            catch (err) {
                console.log('failed to get gigs', err);
            }
        }
        fetchGigs();

    }, [url])

    const [filteredGigs, setFilteredGigs] = useState(gigs)

    useEffect (()=>{
        filterGigs();
    },[filteredGigs])

    // useEffect (async()=>{
    //     const gigs = await loadGigs()
    //     setFilteredGigs(gigs)
    // },[url])

    const [filteredGigs2, setFilteredGigs2] = useState(gigs)

    const [daysToDelivery, setDaysToDelivery] = useState(Infinity)
    useEffect(() => {
        filterGigs();
    }, [daysToDelivery])

    const filterGigs = () => {
        // console.log('gigs before filter', gigs);
        let filteredGigs = gigs.filter((gig) => gig.daysToMake <= daysToDelivery)
        // console.log('gigs after filter', filteredGigs);
        // console.log('filteredGigs', filteredGigs);
        setFilteredGigs2(filteredGigs)
    }

    const onClearAllFilters = () => {
        setDaysToDelivery(Infinity)
        setFilter({title: '',tags: [],userId: ''})
        loadGigs()
    }

    // console.log('gigApp', filterAfterMount.title)
    // if (!gigs) return <h1>Loading...</h1>
    return (
        <div className="gig-app main-container">

            <nav className="headr-nav flex">
                <Link to="/">Ninerr</Link>
                <span>
                    <svg width="8" height="16" viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg"><path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"></path></svg>
                </span >
                <span onClick={onClearAllFilters}>
                <Link to="/explore">Explore</Link>
                </span>
                <span>
                    <svg width="8" height="16" viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg"><path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"></path></svg>
                </span>
                {filterAfterMount.title && <p>Title contains: {filterAfterMount.title}</p>}
                {filterAfterMount.tags[0] && <p>Contains Tag: {filterAfterMount.tags[0]}</p>}
            </nav>

            <section className="filters">
                <SelectDelivery setDaysToDelivery={setDaysToDelivery} daysToDelivery={daysToDelivery}/>
                {/* <SelectSellerLevels /> */}
            </section>
            <GigList gigs={filteredGigs2} className="gig-list" />

        </div>
    )
}

function mapStateToProps(state) {
    return {
        gigs: state.gigModule.gigs,
        storeFilterBy: state.gigModule.filterBy,
    }
}
const mapDispatchToProps = {
    loadGigs,
    addGig,
    setFilter,
}

export const GigApp = connect(mapStateToProps, mapDispatchToProps)(_GigApp)
