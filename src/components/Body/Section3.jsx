import { Key } from 'lucide-react'
import React from 'react'

const Section3 = () => {

const cards = [
{

    Title:"American Heroes",
    span:"$1,000 off for military, first responders, teachers and students.",
    button:"Verify Now",
    id:"1",
    src:"https://digitalassets.tesla.com/tesla-contents/image/upload/Homepage-Grid-American-Heroes.png"
},
{
    Title:" New Feature: In-Car AI",
    span:"Grok is now available.",
    button:"Learn more",  
    id:"2",
    src:"https://digitalassets.tesla.com/tesla-contents/image/upload/Homepage-Grid-AI"
},

]

const handleButtonClick = (type) => {
  if (type === 'Verify Now') {
    window.open('https://www.tesla.com/support/american-heroes', '_blank');
  } else if (type === 'Learn more') {
    window.open('https://www.tesla.com/AI', '_blank');
  } else {
    alert('Action not implemented');
  }
};

  return (
    <div>
        <div className='h-70 m-3 px-10  gap-5 flex'>
            {cards.map((card) => (
                <div
                    key={card.id}
                    className='bg-gray-100 h-60 w-1/2 rounded-xl '
                >
              
                  <div className='flex justify-between '>
                    <div className='flex flex-col p-8 gap-4 '>
                        <h1 className='text-4xl font-medium'>{card.Title}</h1>
                        <span className='font-medium text-xl text-gray-500'>{card.span}</span>
                        <button className='bg-white text-black text-xl w-65 rounded p-2 cursor-pointer' onClick={() => handleButtonClick(card.button)}>{card.button}</button>
                    </div>
                        <img className="h-60 w-65 object-cover overflow-hidden rounded-xl" src= {card.src} alt="" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
export default Section3