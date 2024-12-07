import { useEffect, useState } from 'react';
import { Container, Brand, Menu, Search, Content, NewNote } from './style'
import {FiPlus} from 'react-icons/fi'
import { FiSearch } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { api } from '../../service/api';

export function Home () {
    const [search, setSearch] = useState("")
    const [notes, setNotes] = useState([])
    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])

    const  navigate = useNavigate()

    function handleTagSelected(tagName) {
        if(tagName === 'all')
            return setTagsSelected([])
        if(tagsSelected.includes(tagName))
            return setTagsSelected(prevState => prevState.filter(tag => tag !== tagName))

        setTagsSelected(prevState => [tagName, ...prevState])
    }

    
    useEffect(() => {
        async function fetchTags() {
            const response = await api.get("/tags/")
            setTags(response.data)
        }

        fetchTags()
    }, [])

    useEffect(() => {
        async function fetchNotes() {
            const  response = await api.get(`/notes/?title=${search}&tags=${tagsSelected}`)
            setNotes(response.data)
        }
        fetchNotes()
    }, [search, tagsSelected])

    return(
        <Container>
            <Brand>
                <h1>Wolfnotes</h1>
            </Brand>

            <Header />

            <Menu>
            <li><ButtonText 
                title='Todos' 
                onClick={() => handleTagSelected('all')}
                isActivite={tagsSelected.length === 0 | tagsSelected.length === tags.length} 
            /></li>

            {
                    tags && tags.map( (tag, index) => {
                        return (
                            <li key={index}>
                                <ButtonText 
                                    title={tag.name}
                                    onClick={() => handleTagSelected(tag.name)}
                                    isActivite={tagsSelected.includes(tag.name)}
                                />
                            </li>
                        )
                    }
                )}
            </Menu>

            <Search>
                <Input 
                    placeholder="Pesquisar pelo título" 
                    icon={FiSearch}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Search>
            
            <Content>
                <Section title="Minhas notas">
                    {
                        notes.map((note, index) => {
                            return(
                                <Note 
                                    key={index} 
                                    data={note}
                                    onClick={() => navigate(`/details/${note.id}`)}
                                />
                            )})
                    }
                    
                </Section>
            </Content>
            
            <NewNote to='/new'>
                <FiPlus />
                Criar nota
            </NewNote>
            
        </Container>
    )
}