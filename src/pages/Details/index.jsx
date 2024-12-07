import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import {Container, Links, Content} from  './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { api } from '../../service/api'

export function Details() {
  	const [data, setData] = useState()

	const params = useParams()
	const navigate = useNavigate()

	async function handleRemoveNote() {
		const confirm = window.confirm('Deseja realmente remover a nota?');

		if (confirm) {
			await api.delete(`/notes/${params.id}`)
			handleBack()
		}
	}

	function handleBack() {
		navigate(-1)
	}

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data)
    }

	fetchNote()
  })

	return (
		<>
		<Container>
			<Header />
				{
					data &&	
					<main>
						<Content>
						<ButtonText 
							title='Excluir nota' 
							onClick={handleRemoveNote}
						/>

							<h1>{data.title}</h1>

							<p>{data.description}</p>

						{
							data.links &&
							<Section title='Links úteis' >
								<Links>
								{
									data.links.map((link, index) => <li key={index}><a href={link.url} target='_black'>{link.url}</a></li>)
								}
								</Links>
							</Section>
						}

						{
							data.tags &&
							<Section title='Marcadores' >
								{
									data.tags.map((tag, index) => <Tag key={index} title={tag.name} />)
								}
							</Section>

						}
						
						<Button 
							title='Voltar' 
							onClick={handleBack} 
						/>
						</Content>
					</main>
				}
		</Container>
		</>
	)
}
