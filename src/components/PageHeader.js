import React from 'react'
import { Container } from 'react-bootstrap'

function PageHeader({title, path}) {
  return (
    <section className="page-header">
        <Container>
            <h2>{title}</h2>
            <div className='breadcrumbs'>
                <a href='/'>Accueil</a> / <a href={"/" + path}>{title}</a>
            </div>
        </Container>
    </section>
  )
}

export default PageHeader