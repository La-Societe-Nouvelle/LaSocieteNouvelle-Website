import React from 'react'
import { Container } from 'react-bootstrap'

function PageHeader({title, path, prev, prevTitle}) {
  return (
    <section className="page-header">
        <Container>
            <h2>{title}</h2>
            <div className='breadcrumbs'>
                <a href='/'>Accueil</a> / {prev && (<a href={"/" + prev}>{prevTitle} /</a>)} <a href={"/" + path}>{title}</a>
            </div>
        </Container>
    </section>
  )
}

export default PageHeader