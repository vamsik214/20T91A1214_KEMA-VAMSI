import './App.css';
import { Card } from './components/card/Card';
import image1 from './images/image1.jpeg'
import image2 from './images/image2.jpeg'
import image3 from './images/image3.jpeg'
import image4 from './images/image4.jpeg'
import image5 from './images/image5.jpeg'
import image6 from './images/image6.jpeg'



function App() {
  const cards = [
    {
      url:image1,
      title:"Oreo Scoops",
      description:"A scoop of happiness topped with Oreo perfection."
    },
    {
      url:image2,
      title:"Chocolate Scoops",
      description:"Elevate your dessert game with luscious chocolate scoops."
    },
    {
      url:image3,
      title:"Chocolate Cornetto",
      description:"Crunchy, creamy, and utterly delicious - that's the Chocolate Cornetto experience."
    },
    {
      url:image4,
      title:"Chocobar",
      description:"Take a break and enjoy the simple pleasure of a chocolate chocobar."
    },
    {
      url:image5,
      title:"Butterscotch",
      description:"Craving something sweet? Dive into a bowl of luscious butterscotch."
    },
    {
      url:image6,
      title:"Icecream Scoops",
      description:"Create your own masterpiece with a mix of your favorite ice cream scoops."
    },
  ]
  return (
     <div className="app">
       {
         cards.map((card,index)=><Card key={index} card={card}/>)
       }
     </div>
  );
}

export default App;