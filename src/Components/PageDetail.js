import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Modal, ModalBody,ModalFooter, ModalTitle } from 'react-bootstrap'
    const PageDetail = ({ character}) => {
    const [show, popup] = useState()
    const[author, setAuthor]=useState("")
    const [quotes, setQuote]= useState([{quote:""}])

    useEffect(() => {
        const fetchquote = async () => {
          const responsequote = await axios.get(`https://www.breakingbadapi.com/api/quote?author=${author}`)
          setQuote(responsequote.data)
        }
        fetchquote()
      }, [author])
    const modalOpen = () => {
        popup(true)
        setAuthor(character.name)
    }
    
    const modalClose = () => popup(false)

    return (
        <>
            <button className="btn btn-outline-success" onClick={modalOpen}>More Info</button>
            <Modal className="modalstyle" show={show} onHide={modalClose}>
              <ModalTitle>
              <h5 className="text-center mt-3"><strong>{character.name}</strong></h5>
              </ModalTitle>
                <ModalBody>
                    <img src={character.img} style={{ width: "32rem", height: "350px", marginBottom:"30px" }} alt="character" />
                    <p><b>Occupation:</b> {String(character.occupation).split(",  ")}</p>
                    <p><b>Date of Birth:</b> {character.birthday}</p>
                    <p><b>Status of Character:</b>{character.status}</p>
                    <p><b>Nickname:</b>{character.nickname}</p>
                    <p><b>Actor who portrays the character:</b>{character.portrayed}</p>
                    <p><b>Seasons in which the character appears:</b>{character.appearance[0]}</p>
                    <p><b>All quotes by the character:</b>{quotes.map(quote => <ul><li>{quote.quote}</li></ul>)}</p>
                    
                </ModalBody>
                <ModalFooter>
                <button className="btn btn-outline-danger" onClick={modalClose}>Close</button>
                </ModalFooter>
                
            </Modal>
        </>
    )
}

export default PageDetail

