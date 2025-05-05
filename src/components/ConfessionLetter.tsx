import React from 'react';

const ConfessionLetter: React.FC = () => {
  

  

  return (
    <div 
      className="max-w-xl w-full mx-auto select-none"
      
    >
      <div className="bg-white p-8 md:p-10 rounded-lg shadow-md relative overflow-hidden border border-rose-200">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/7135121/pexels-photo-7135121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] opacity-[0.03] bg-cover"></div>
        
        <div className="relative">          
          <div className="space-y-4 font-serif text-gray-700 leading-relaxed">
            <p>Hey MJ,</p>
            
            <p>I always wanted to say this to you — I've had a crush on you since our third year. And I always wished that we could've spent some time together.</p>
            
            <p>I'm not expecting any reply or answer. I just wanted to tell you this— that's all. I know you've your own choices, and I totally respect that.</p>
            
            <p>This is our last day of college, with everyone heading off to different places, different jobs… who knows where life will take us from here. So I just wanted to share this before we all move on.</p>
            
            <p>I really wish this doesn't change anything between us and that we continue to stay in touch and remain good friends. Maybe we'll cross paths again someday.</p>
            
            <p className="pt-4">All the best for your future.</p>
          </div>
          
          
        </div>
      </div>
      
      
    </div>
  );
};

export default ConfessionLetter;