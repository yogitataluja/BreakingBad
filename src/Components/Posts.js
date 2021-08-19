import React from 'react'
import PageDetail from './PageDetail'
import Spinner from './Spinner'

const Posts = ({ posts, loading}) => {
    if (loading) {
    return <Spinner/>  // put spinner to show loading
    } 
    return (<>
        {posts.map((character, index) => {
            return (
                <div className="col-10 flex col-md-6 my-3 ">
                    <div className="card" style={{ width: "28rem", height: "19rem" }} key={index}>
                        <div className="d-flex justify-content-center align-item-center p-2 small">
                            <img className="card-img-top" style={{ width:"12rem", height:"250px" }} src={character.img} alt="Character" />
                            <div className="card-body">
                                <h5 className="card-title"><strong>{character.name}</strong></h5>
                                <p className="card-text"><b>Occupation:</b> {String(character.occupation).split(",  ")}</p>
                                <p className="card-text"><b>Date of Birth:</b> {character.birthday}</p>
                                <p className="card-text"><b>Status of Character:</b>{character.status}</p>
                                <PageDetail character={character}  />
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}


    </>
    )
}

export default Posts
