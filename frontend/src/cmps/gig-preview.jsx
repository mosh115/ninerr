import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



export function GigPreview({ gig }) {
    // const star = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 1792 1792"> <path fill="currentColor" d="M 12 5.173 l 2.335 4.817 l 5.305 0.732 l -3.861 3.71 l 0.942 5.27 l -4.721 -2.524 l -4.721 2.525 l 0.942 -5.27 l -3.861 -3.71 l 5.305 -0.733 l 2.335 -4.817 Z m 0 -4.586 l -3.668 7.568 l -8.332 1.151 l 6.064 5.828 l -1.48 8.279 l 7.416 -3.967 l 7.416 3.966 l -1.48 -8.279 l 6.064 -5.827 l -8.332 -1.15 l -3.668 -7.569 Z"></path></svg>
    // const star = <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgNS4xNzNsMi4zMzUgNC44MTcgNS4zMDUuNzMyLTMuODYxIDMuNzEuOTQyIDUuMjctNC43MjEtMi41MjQtNC43MjEgMi41MjUuOTQyLTUuMjctMy44NjEtMy43MSA1LjMwNS0uNzMzIDIuMzM1LTQuODE3em0wLTQuNTg2bC0zLjY2OCA3LjU2OC04LjMzMiAxLjE1MSA2LjA2NCA1LjgyOC0xLjQ4IDguMjc5IDcuNDE2LTMuOTY3IDcuNDE2IDMuOTY2LTEuNDgtOC4yNzkgNi4wNjQtNS44MjctOC4zMzItMS4xNS0zLjY2OC03LjU2OXoiLz48L3N2Zz4="></img>
    const star = <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEgElEQVRoge2ZTWwVZRSGnzP30kJDTYz8/6hEImLEgIGi4gL56dw2gLhxQ4TEHSQURHYmpizcsYLoxrhQ48KYEBNFfksxijHRjSQmhMitLaUgYhHkt9z5Xhf3Um/bO7czvTO4sCf5Nne+Oed9z3nPmW/mwriN27ilZurY2KTj65elGcPScqwjr04jW+gCQWFgnvlHL6cRx0vDKQDZYBu4BnANZLPb0gqTSgX0dUs99V43aDoI0B9ManzMXvz8dtKx0qlAfWbzIHgJ5KZy+69NaYRKnICEQbATOZADHCUiu4vXkrXkK3CiJYf0dEk65WsBHav9pMMlT0DaVcx6haXCm0mHS7SkOtL8DBlOg6xCBYrLCxbbqu9+TipmshXI2FsjwQ+rQsCOJEMmVgEdaZ5GxnWDJoZmXwJ0l8CbZ7lvLyYRN7kKZN326uAHq1CPV9iaVNhEKqDvX5jErYYe0JTBsTk068NXP+72o+afvllr7NgEJIyTrdNRYTZiFs7NwYIVwKYQyVRYDnCfAqdw6gX6qMtcYOWPv5uhmgioY+MT4GYjNxfTTNAc0GykWaC5oBmgCaFSGSKZUfaUlv4leg90CXQe1CfcBc/Ui9NFcOfJWK+tOZsPJaAT6/cg3omXyah7w8BHJwrC5NrNz++5jzk7JP3O8pjT4ChUCMjqUyYa0aGZj+DbARJSV2gFANTR+jroQxRBJrVLJhLRUmICk7ZaruuDqgQAdNxfAxwANf7Xkin5v2XiNcvlDw7HGjqFdHz1MswOIk198JJx5b77zYIN1txzqhLOqmNUHauewHEY0/zkJVPl/vv7Td0m5cz/7UwYxlGfA+pcOYNAh0CL40vGxWvUIf7dLxZkc9b6a281fJEeZOpcOZmgcACx9gFIBtA35nmv2Nr8tdGwRToL2csnbzDQuB7cZ5XP+iOBjwQf8o4wEvwX1lhoiQIeYh4lJIxjz+/FtCt5yQiJ97wfutqsHRcV05gOczq2dB+wPUHJILQ/43e3xcWSHX1LJQa6UaRe45QZ8ht/jwXK2Ah4LL9/zKhFMuVEDS0fG5SYpnY85JbGA1/6xKIqA8DUpPb4eOK/kb205ClJD9UwZcJINrJi5oL0CTg1RRmllSVThSQq+U6ZgJNrGlUuoZKp3hsOF5tA7CY2U9OYpkzYlCrba2lXQJ2PTwS3KCL4fiNoM1wbuP6KkhlO1PRsMUZKBBiY/ByobhTJOFnwieEtNL9nv/k9++2ezRduH6gwSm/Ucef6kvQIeEGFBi4HQ6c5lmSauzebf27wHxlb13M14/ftMFiEgkNVe8Pi9UEsAk5qGiGXIvjzJm3x/Pwqa+k6HXa/+X1nvNzlVjO3AXSukgQdhfQImMpGaDGLN4X2WJ170nJdH0f241/50qZcWWgEO8FdL6+GQSwCkQ9z+mrRw6q78yfIkJxMH3kueNty3TV949ThhpmOCe8abgvIQ5IF2Uds3bWrUe6PPkYn2AByZ4FLZtrtNed/GivocrPcrYvAGzra8L4C2wtuOrp2Nwnf4zZu/wf7B/kvUHdd0NvhAAAAAElFTkSuQmCC"></img>
    const heart = <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABr0lEQVRIie2UPW/TUBSGn3OdbDBU4nOp1IGBgZUdlXCv7bYsRZUq8QtgYspPgJ2JX4AEA2puZCeZ+BgQY2ckhCqg7dIBiQpF9mGgiUJixw31wMC7+Ryd57n3Sj7wPxWR6cJOr7fSyExb0Qi4AhygpEGQP3bOfQTodPrXJJC2oBa4DOyjdLOGPtmw9lOpwCcDi+pLgXMFhxkK8iCXXETlKdAsOO93QTej6E5/RrDT662YTHZL4KNo2c0nJai5EcernwHMqNzITLsCPgLPgQPoeSRrj77GgpM3rytjlpkoXqxRcKlI8KVGwV6R4HVteOXNjECQZ3Xh8yAfs8aCKGq9F3hxdjzP1537MCMACAJ9CHw7A/4Amo8mC38IrLWHavIt4Pgv4MdGZDOOb+2XCgDWnHuL6l3g5wLwoRq5F4atd9ONGQFAHNuBCveB4Wnggm6vuVa3qDn3t0+S/mqmvJqzQn78Xm42KWNU7BXopOlNk5sucGGqdWRENoqeZSEBgPeD62I0BZZPhr6KmDAMb+9WzZ5KAJCm6dUsMwlCsxGos9buVU8tGO/9kvd+qXbwP51ff9qC0TY4+DsAAAAASUVORK5CYII="></img>


    const images = ['https://picsum.photos/id/237/100/', 'https://picsum.photos/id/765/100/', 'https://picsum.photos/id/405/100']

    return (
        <article className="gig-preview " key={gig._id}>
            <div className='carusel'>
                <Carousel autoPlay={false} infiniteLoop={true} showThumbs={false} showIndicators={true} showStatus={false} dynamicHeight={false}>
                    {images.map(img => {
                        return <div key={img}><img src={img}></img></div>
                    })}
                </Carousel>
            </div>


            {/* <Link to={`/gig/${gig._id}`}>
                <img className='carusel' src="https://random.imagecdn.app/200/300" alt="" />
            </Link> */}
            <section className='seller-info flex'>
                <img className='avatar' src={`https://i.pravatar.cc/24?u=${gig._id}`} />
                <div>
                    <Link to={'/#'}> {gig.seller.fullname}</Link>
                    <p>{gig.seller.level}</p>
                </div>
            </section>



            <h3><Link className='gig-title clean-link' to={`/gig/${gig._id}`}> {gig.title}</Link></h3>
            <section className='gig-rating flex'>
                <span className='star'>{star}</span>
                <p>{gig.seller.rate} </p>
                <p>({gig.seller.raters})</p>
            </section>
            <footer className='footer flex'>
                <div>{heart}</div>
                <div>
                    <small>Starting At </small>
                    <span>${gig.price} </span>
                </div>
            </footer>

            {/* Todo:<br />
                gig images carrousel<br />
                seller name<br />
                seller avatar<br />
                seller level<br />
                gig title<br />
                gig rating+star (num raters)<br />
                heart<br />
                gig price */}

        </article>
    )
}
{/* 



            <h4>{gig.vendor}</h4>
            <h1>⛐</h1>
            <p>Price: <span>${gig.price.toLocaleString()}</span></p>
            <p>Owner: <span>{gig.owner && gig.owner.fullname}</span></p>
            {/* <div>
                                <button onClick={() => { onRemoveGig(gig._id) }}>x</button>
                                <button onClick={() => { editGig(gig) }}>Edit</button>
                            </div> */}

{/* <button className="buy" onClick={() => { onAddToGigt(gig) }}>Add to Gigt</button> */ }
//         </li>) */}

// }
