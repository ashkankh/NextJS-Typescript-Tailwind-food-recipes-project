import DetailsPage from '@/components/templates/detailsPage'
import { menuType } from '@/types/menu.types'
import { notFound } from 'next/navigation'
import React from 'react'

function Details({ data }: { data: menuType }) {
    return (
        <DetailsPage data={data} />
    )
}

export default Details


export async function getStaticPaths() {
    const response = await fetch("http://localhost:3001/data/")
    const data: menuType[] = await response.json()
    const paths = data.map((each) => ({
        params: {
            id: each.id.toString()
        }
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context: { params: { id: string } }) {
    const { id } = context.params
    const response = await fetch(`http://localhost:3001/data/${id}`)
    const data = await response.json();

    if (!data.name) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            data,
        }
    }
}