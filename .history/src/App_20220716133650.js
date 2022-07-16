import classes from './CSS/App.module.css';
import './App.css';
import React, {useState} from 'react'
import Search from './Search';
import Filter from './Filter';
import Data from './Data';
import MOCKDATA from './MOCK_DATA.json'
function App() {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <div className='App'>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {MOCKDATA.filter((val) =>{
            if (searchTerm === "")
            {
              return val
            }
            /* Filters */
            else if (searchTerm === "Red")
            {
              return val.item_name === "English Walnut"
            }

            else if (searchTerm === "Blue")
            {
              return val.item_name === "Diclofenac Sodium" 
              || val.item_name === "Head and Shoulders" 
              || val.item_name === "POISON OAK AND IVY RELIEF"
            }

            else if (searchTerm === "Grey")
            {
              return val.item_name === "Nystatin" ||
              val.item_name === "ZOMIG" ||
              val.item_name === "Ondasetron Hydrochloride" ||
              val.item_name === "equate nasal" ||
              val.item_name === "Arnica Plus" ||
              val.item_name === "TRIPLE ANTIBIOTIC" ||
              val.item_name === "Fexofenadine Hydrochloride"
            }

            else if (searchTerm === "Green")
            {
              return val.item_name === "OXYGEN" ||
              val.item_name === "Digoxin" ||
              val.item_name === "Cephalexin"
            }
            else if (val.item_name.toLowerCase().includes(searchTerm.toLowerCase()) || val.item_description.toLowerCase().includes(searchTerm.toLowerCase()))
            {
                return val
            }
           }).map((item, key) => {
            if (key%5 === 0 && searchTerm === "")
            {
            return (
              <div>
              <h5 className={classes.data}>{MOCKDATA[key].date}</h5>
            <Data date={MOCKDATA[key].date} key={key} imageURL={item.item_image}
            title={item.item_name}
            desc={item.item_description}  
            /> 
            </div>
            )
          }
          else 
          {
            return (
              <div>
              <Data key={key} imageURL={item.item_image}
            title={item.item_name}
            desc={item.item_description}  
            /> 
              </div>
            )
          }
          }
      )}
    </div>
  );
          }
export default App;
