// let contain = document.getElementById("all");



let quotes = [
    
    '“Somewhere, something incredible is waiting to be known. ― Carl Sagan”', '“The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, the carbon in our apple pies were made in the interiors of collapsing stars. We are made of starstuff. ― Carl Sagan, Cosmos”', '“Extraordinary claims require extraordinary evidence. ― Carl Sagan”', '“Imagination will often carry us to worlds that never were, but without it we go nowhere. ― Carl Sagan”', '“You are an interesting species. An interesting mix. You are capable of such beautiful dreams, and such horrible nightmares. You feel so lost, so cut off, so alone, only you are not. See, in all our searching, the only thing we have found that makes the emptiness bearable, is each other. ― Carl Sagan, Contact”', '“I do not want to believe. I want to know.  ― Carl Sagan”', '“One, remember to look up at the stars and not down at your feet. Two, never give up work. Work gives you meaning and purpose and life is empty without it. Three, if you are lucky enough to find love, remember it is there and do not throw it away.  ― Stephen Hawking”', '“Quiet people have the loudest minds. ― Stephen Hawking”', '“Intelligence is the ability to adapt to change. ― Stephen Hawking”','“It surprises me how disinterested we are today about things like physics, space, the universe and philosophy of our existence, our purpose, our final destination. Its a crazy world out there. Be curious.  ― Stephen Hawking”', '“Remember to look up at the stars and not down at your feet. Try to make sense of what you see and wonder about what makes the universe exist. Be curious. And however difficult life may seem, there is always something you can do and succeed at.It matters that you do not just give up.   ― Stephen Hawking”', '“The victim should have the right to end his life, if he wants. But I think it would be a great mistake. However bad life may seem, there is always something you can do, and succeed at. While there is life, there is hope. ― Stephen W. Hawking”', '“One of the basic rules of the universe is that nothing is perfect. Perfection simply does not exist.....Without imperfection, neither you nor I would exist. ― Stephen Hawking”', '“Although I cannot move and I have to speak through a computer, in my mind I am free. ― Stephen Hawking”'
    
]


let myQuotes = () => {
    let randomNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById("thisquote").innerHTML = quotes[randomNum];
}




// contain.addEventListener("submit", quotes);