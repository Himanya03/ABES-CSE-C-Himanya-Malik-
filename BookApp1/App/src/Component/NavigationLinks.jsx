import React from 'react';
import { BrowserRouter ,  Routes , Route  , Link  } from 'react-router-dom' ;

function NavigationLinks() {
    function Home()
    {   
        return <>
         (<h1>This is my Home  </h1>) ;
        </>
    }

    function About()
    {
        return <>
         (<h1>This is my AboutUs </h1>) ;
        </>
    }
  
    return (
        <div>
            <nav>
                 <Link to = "/" > Home </Link>  | 
                 <Link to = "/about" > About </Link>
            </nav>
           
            <Routes> 
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    ) ; 
}
export default NavigationLinks ;