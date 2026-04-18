import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
]

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='w-full px-12 md:px-10'>
            <Carousel 
            opts={{
                    align: "start",
                    loop: true,
                }}
            className="w-full max-w-xl mx-auto my-20">
                <CarouselContent className="-ml-1">
                    {
                        category.map((cat, index) => (
                            <CarouselItem  key={index} className="pl-1 basis-full md:basis-1/2 lg-basis-1/3 flex justify-center">
                                <Button onClick={()=>searchJobHandler(cat)} variant="outline" className="rounded-full whitespace-nowrap text-sm md:text-base px-4 py-2">{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious className="flex items-center justify-center" />
                <CarouselNext className="flex items-center justify-center" />
            </Carousel>
        </div>
    )
}

export default CategoryCarousel