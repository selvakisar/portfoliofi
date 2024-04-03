import { useEffect, useMemo, useState } from "react";

export const  Bio= {
 
    name:"Selvamani K",
    roles:["Full Stack Developer ",
    "Front-end Developer",
    "Programmer",]
}


export const  IntroApp=()=> {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedWord, setDisplayedWord] = useState('');
  
    const words = useMemo(() => ["Full Stack Developer", "Front-End Developer", "Back-End Developer", ], []);
  
    useEffect(() => {
      const typewriterInterval = setInterval(() => {
        if (displayedWord.length < words[currentWordIndex].length) {
          // If the word is not fully typed yet, add one character
          setDisplayedWord(prev => prev + words[currentWordIndex].charAt(prev.length));
        } else {
          // If the word is fully typed, move to the next word or start from the beginning
          setCurrentWordIndex(current => (current + 1) % words.length);
          setDisplayedWord(''); // Reset the displayed word
        }
      }, 100); // Typing speed in milliseconds
  
      return () => clearInterval(typewriterInterval);
    }, [currentWordIndex, displayedWord, words]);
  
    return (
      <div className=" mx-8 my-6 py-6 h-64" style={{backgroundImage: 'url(https://i.pinimg.com/564x/92/45/50/924550f254f939c1fceaa2e6424b0b4c.jpg)'}} >
<div className=" ">
<h1 className="text-6xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl  text-green-500  font-bold font-serif text--800 border-l-8 border-gray-900">{"Hi, am Selvamani  "+displayedWord}</h1>

</div>

     </div>
    );
  }
  

export const Logo=()=>{
  return(
    <div className=" mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4" >

      <div className=" w-32 h-32 flex flex-col ">
 <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/0*g3Rud63B7gJx_DgP.gif" alt="M"/>
       
      </div>      <div className=" w-32  h-32 flex flex-col ">
 <img src="https://colaninfotech.com/wp-content/uploads/2021/09/expressjs.gif" alt="E"/>
       
      </div>      <div className=" w-32 h-32  flex flex-col ">
 <img src="https://colaninfotech.com/wp-content/uploads/2021/09/reacts.gif" alt="R"/>
       
      </div>      <div className=" w-32 h-32  flex flex-col ">
 <img src="https://colaninfotech.com/wp-content/uploads/2021/09/nodejs.gif" alt="N"/>
       
      </div>
  </div> 
  )
}








