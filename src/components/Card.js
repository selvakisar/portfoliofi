import React from 'react'
import { motion } from 'framer-motion';


export const SkillsCard = () => {

  
  
    return (
       <motion.div initial={{ rotate: -90 }}
      animate={{ rotate: 0 }}
      transition={{ duration: 0.9 }}>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <div className=" p-2">
        
      <div className="relative rounded-full overflow-hidden w-24 h-24" style={{"boxShadow":"2px 6px 6px seagreen"}}>
      <img
        src="https://i.pinimg.com/564x/aa/b3/01/aab301aaa113a8610a6fe4ef6cb4e382.jpg"
        alt="html"
        className="object-cover w-full h-full rounded-full border-2 border-pink-400"
      />
      <div className="absolute inset-0 rounded-full border-4 border-blue-500 filter blur-3xl"></div>
    </div>
        
        </div>
      <div class=" p-2">
        
        <div className="relative rounded-full overflow-hidden w-24 h-24" style={{"boxShadow":"2px 6px 6px seagreen"}}>
        <img
          src="https://i.pinimg.com/564x/fc/da/ff/fcdaff4d3f30005e462d0d3c31cfb691.jpg"
          alt="css"
          className="object-cover w-full h-full rounded-full border-2 border-pink-400"
        />
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 filter blur-3xl"></div>
      </div>
          
      
      </div>
      <div class="p-2">
        
        <div className="relative rounded-full overflow-hidden w-24 h-24" style={{"boxShadow":"2px 6px 6px seagreen"}}>
        <img
          src="https://i.pinimg.com/564x/83/00/d2/8300d20857e2de73a5fd08601dcf7f0e.jpg"
          alt="js"
          className="object-cover w-full h-full rounded-full border-2 border-pink-400"
        />
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 filter blur-3xl"></div>
      </div>
          
      </div>


      <div class="p-2">
        
        <div className="relative rounded-full overflow-hidden w-24 h-24" style={{"boxShadow":"2px 6px 6px seagreen"}}>
        <img
          src="https://i.pinimg.com/564x/92/d6/60/92d660adb69ff63b4d133cda9592d848.jpg"
          alt="Boots"
          className="object-cover w-full h-full rounded-full border-2 border-pink-400"
        />
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 filter blur-3xl"></div>
      </div>
          
      </div>



      <div class="p-2">
        
        <div className="relative rounded-full overflow-hidden w-24 h-24" style={{"boxShadow":"2px 6px 6px seagreen"}}>
        <img
          src="https://i.pinimg.com/564x/aa/2c/1c/aa2c1cd2dbd1fb76be537fbca0350c08.jpg"
          alt="react"
          className="object-cover w-full h-full rounded-full border-2 border-pink-400"
        />
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 filter blur-3xl"></div>
      </div>
          
      </div>



      <div class="p-2">
        
        <div className="relative rounded-full overflow-hidden w-24 h-24" style={{"boxShadow":"2px 6px 6px seagreen"}}>
        <img
          src="https://i.pinimg.com/564x/7b/df/1e/7bdf1e16c7bedec90f0662eb2f9ca764.jpg"
          alt="twcss"
          className="object-cover w-full h-full rounded-full border-2 border-pink-400"
        />
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 filter blur-3xl"></div>
      </div>
          
      </div>





      <div class="p-2">
        
        <div className="relative rounded-full overflow-hidden w-24 h-24" style={{"boxShadow":"2px 6px 6px seagreen"}}>
        <img
          src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
          alt="exp"
          className="object-cover w-full h-full rounded-full border-2 border-pink-400"
        />
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 filter blur-3xl"></div>
      </div>
          
      </div>





      <div class="p-2">
        
        <div className="relative rounded-full overflow-hidden w-24 h-24" style={{"boxShadow":"2px 6px 6px seagreen"}}>
        <img
          src="https://i.pinimg.com/564x/5e/da/8d/5eda8d1a06e57a7789581bb22a37cab3.jpg"
          alt="node"
          className="object-cover w-full h-full rounded-full border-2 border-pink-400"
        />
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 filter blur-3xl"></div>
      </div>
          
      </div>






      <div class="p-2">
        
        <div className="relative rounded-full overflow-hidden w-24 h-24" style={{"boxShadow":"2px 6px 6px seagreen"}}>
        <img
          src="https://i.pinimg.com/564x/09/7b/34/097b349ab1d78c15744c3a89ff457939.jpg"
          alt="Sql"
          className="object-cover w-full h-full rounded-full border-2 border-pink-400"
        />
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 filter blur-3xl"></div>
      </div>
          
      </div>




      <div class="p-2">
        
        <div  className="relative rounded-full overflow-hidden w-24 h-24" style={{"boxShadow":"2px 6px 6px seagreen"}} >
        <img
          src="https://i.pinimg.com/564x/e5/ee/e3/e5eee315a17de0d7f56117077eb71fa9.jpg"
          alt="mongo"
          className="object-cover w-full h-full rounded-full border-2 border-pink-400"
        />
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 filter blur-3xl"></div>
     
      </div>
          
      </div>

      </div>

      </motion.div>

    );
  };