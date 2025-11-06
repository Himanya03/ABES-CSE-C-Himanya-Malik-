import React from "react";
import './Component/Book.css';
import Book from "./Component/Book.jsx";
import './App.css';
import Navbar from './Component/Navbar.jsx';
import './Component/Navbar.css';
import Navigation from "./Component/NavigationLinks.jsx";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (

    <>
     <Navbar/>
     
      <div id = "adi" className="App" style={{display:"flex" , gap : 100}}>
      <Book className="book-box" title = "Physics" price = "800"  img ="https://imgs.search.brave.com/0DBcsfj5WEJRi5TnKon-DyjAjUTYHDw-ynnfl_avs5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZGstaHViL2lt/YWdlL3VwbG9hZC9j/X2xpbWl0LGZfYXV0/byx3XzU4MCxoXzY1/MC9kay1jb3JlLW5v/bnByb2QvOTc4MTQ2/NTQ5MTAyMi85Nzgx/NDY1NDkxMDIyX2Nv/dmVyLmpwZw" />


      <Book  className="book-box"  title = "Maths" price = "1200"  img = "https://imgs.search.brave.com/DMW-175x3pr7wT3bRoh4uqdyWhbVPtJZDBHRLJhmCWI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9leGNs/dXNpdmVib29rcy5j/by56YS9jZG4vc2hv/cC9wcm9kdWN0cy85/NzgwMjQxMzUwMzYy/XzM4NTRhNmUzLWEz/NjEtNGZjYy04ZWU2/LTc1ZjcyY2ZjZjM3/Ny5qcGc_Y3JvcD1j/ZW50ZXImaGVpZ2h0/PTQzMCZ2PTE3MDcy/MzYzOTImd2lkdGg9/MzEw"   />

      <Book  className="book-box" title = "Chemistry" price = "1000" img = " https://imgs.search.brave.com/P-pASFui_ady6NiikxOzJhG2P9UPu8_2j8Um54a59Ys/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/ZWJvb2tzZWxpYnJh/cnkuY29tLy9wdWJs/aWMvaW1hZ2VzL2Jv/b2tfaW1nLzE2MTk5/MzUwMzQuanBn" />

      <Book  className="book-box" title = "Maths" price = "1200"  img = "https://imgs.search.brave.com/DMW-175x3pr7wT3bRoh4uqdyWhbVPtJZDBHRLJhmCWI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9leGNs/dXNpdmVib29rcy5j/by56YS9jZG4vc2hv/cC9wcm9kdWN0cy85/NzgwMjQxMzUwMzYy/XzM4NTRhNmUzLWEz/NjEtNGZjYy04ZWU2/LTc1ZjcyY2ZjZjM3/Ny5qcGc_Y3JvcD1j/ZW50ZXImaGVpZ2h0/PTQzMCZ2PTE3MDcy/MzYzOTImd2lkdGg9/MzEw"   />

      <Book className="book-box"  title = "Chemistry" price = "1000" img = " https://imgs.search.brave.com/P-pASFui_ady6NiikxOzJhG2P9UPu8_2j8Um54a59Ys/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/ZWJvb2tzZWxpYnJh/cnkuY29tLy9wdWJs/aWMvaW1hZ2VzL2Jv/b2tfaW1nLzE2MTk5/MzUwMzQuanBn" />
      
      <Book  className="book-box" title = "Chemistry" price = "1000" img = " https://imgs.search.brave.com/P-pASFui_ady6NiikxOzJhG2P9UPu8_2j8Um54a59Ys/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/ZWJvb2tzZWxpYnJh/cnkuY29tLy9wdWJs/aWMvaW1hZ2VzL2Jv/b2tfaW1nLzE2MTk5/MzUwMzQuanBn" />
      
    </div>
    <Navigation/>
    </>

  );
} 
export default App;