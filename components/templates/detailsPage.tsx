import { menuType } from '@/types/menu.types'
import React from 'react'
import { Typography } from '../ui/Typograhy'
import Image from 'next/image'
import Location from '../icons/location_temp'
import Dollar from '../icons/dollar_temp'
function DetailsPage({ data }: { data: menuType }) {
    const { id, name, details, price, introduction, ingredients, recipe } = data
    return (
        <>
            <Typography variant='title' underline='true'>Details</Typography>
            <div className='flex flex-row gap-5'>
                <Image src={`/images/${id}.jpeg`} height={1000} width={1000} alt={name} className='flex w-1/2 md:w-1/3 rounded-2xl'></Image>
                <div className='flex flex-col'>
                    <Typography variant='body' weight='bold' color='primary'>{name}</Typography>
                    <div className='flex flex-row items-center'>
                        <Location />
                        <Typography variant='caption' >{details[0].Cuisine}</Typography>
                    </div>
                    <div className='flex flex-row items-center mt-8'>
                        <Dollar />
                        <Typography variant='caption' >{price}$</Typography>
                    </div>
                </div>
            </div>
            <Typography variant='body' align='justify' className='mt-10' >{introduction}</Typography>
            <Typography variant='title' color='primary' className='mt-8'>Details</Typography>
            <ul className='flex flex-col text-sm gap-1 list-disc marker:text-green-500 '>
                <li>Cuisine: {details[0].Cuisine}</li>
                <li>Recepie type: {details[1]['Recipe Type']}</li>
                <li>Difficulty: {details[2].Difficulty}</li>
                <li>Preparation Time: {details[3]['Preparation Time']}</li>
                <li>Cooking Time: {details[4]['Cooking Time']}</li>
                <li>Serves: {details[5].Serves}</li>
            </ul>
            <Typography variant='title' color='primary' className='mt-8'>Ingredients</Typography>
            <ul className='flex flex-col text-sm gap-1 list-disc marker:text-green-500 '>
                {ingredients.map((ingredient, index) => (<li key={index} >{ingredient}</li>))}
            </ul>
            <Typography variant='title' color='primary' className='mt-8'>Recipes</Typography>
            <ul className='flex flex-col text-sm gap-2 '>
                {recipe.map((each, index) => (<div key={index} className='flex flex-row bg-green-300 rounded p-4 items-center gap-5'><Typography variant='h3' className='justify-center items-center'>{index + 1}</Typography><li className='text-justify'>{each}</li></div>))}
            </ul>

        </>
    )
}

export default DetailsPage