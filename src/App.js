import React from 'react';
import OptionsComponent from './components/OptionsComponent';
import DescriptionComponent from './components/DescriptionComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faItalic, faLemon, faTheaterMasks, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import {faArtstation, faWeebly} from "@fortawesome/free-brands-svg-icons";



function App() {
  return (
    <div className="App">
      <main>

        <section>
          <h2 className="top-heading">How do I know which logo style is right for me?</h2>
          <h1 className="bottom-heading">Different Types of Logo Styles</h1>
          <button className="contact-button">Contact Us <img src="" alt=""/></button>
          <OptionsComponent
            image= { <FontAwesomeIcon icon={faItalic} /> }
            logoType= "Lettermark Logos"
          />
          <OptionsComponent
            image= { <FontAwesomeIcon icon={faWeebly} /> }
            logoType= "Wordmark Logos"
          />
          <OptionsComponent
            image= { <FontAwesomeIcon icon={faLemon} /> }
            logoType= "Pictorial Logos"
          />
          <OptionsComponent
            image= { <FontAwesomeIcon icon={faArtstation} /> }
            logoType= "Abstract Mark Logos"
          />
          <OptionsComponent
            image= { <FontAwesomeIcon icon={faTheaterMasks} /> }
            logoType= "Mascot Logos"
          />
          <OptionsComponent
            image= { <FontAwesomeIcon icon={faPuzzlePiece} /> }
            logoType= "Combination Logos"
          />
        
        </section>
        <section>
        <DescriptionComponent
            heading = "Lettermark Logos"
            description= "A Monogram or lettermark is a 7typography-based logo that’s comprised of a few letters, usually a company’s initials. The lettermark is all about simplicity. By utilizing just a few letters lettermark logos are effective at streamlining any company brand if they have a long name."
            logos= {[<img src="./img/hbo-logo.jpg" alt=""/>,<img src="./img/ibm-logo.jpg" alt=""/>,<img src="./img/nasa-logo.jpg" alt=""/>]}
          />

          <DescriptionComponent
            heading = "Wordmark Logos"
            description= "Similar to a lettermark, a wordmark or logotype is a font-based logo that focuses on a business’ name alone. Think Visa and Coca-Cola. Wordmark logos work really well when a company has a succinct and distinct name. Google’s logo is a great example of this. The name itself is catchy and memorable so, when combined with strong typography, the logo helps create strong brand recognition."
            logos={[<img src="./img/visa-logo.jpg" alt=""/>,<img src="./img/coca-logo.jpg" alt=""/>,<img src="./img/google-logo.jpg" alt=""/>]}
          />

          <DescriptionComponent
            heading = "Pictorial Logos"
            description= "A pictorial mark (sometimes called brand mark or logo symbol) is an icon—or graphic-based logo. It’s probably the image that comes to mind when you think “logo”: the iconic Apple logo, the Twitter bird, the Target bullseye. Each of these companies’ logos is so emblematic, and each brand so established, that the mark alone is instantly recognizable. A true brand mark is only an image. Because of this, it can be a tricky logo type for new companies, or those without strong brand recognition, to use."
            logos={[<img src="./img/apple-logo.jpg" alt=""/>,<img src="./img/twitter-logo.jpg" alt=""/>,<img src="./img/target-logo.jpg" alt=""/>]}
          />

          <DescriptionComponent
            heading = "Abstract Logos"
            description= "An abstract mark is a specific type of pictorial logo. Instead of being a recognizable image—like an apple or a bird—it’s an abstract geometric form that represents your business. A few famous examples include the BP starburst-y logo, the Pepsi divided circle and the strip-y Adidas flower. Like all logo symbols, abstract marks work really well because they condense your brand into a single image. However, instead of being restricted to a picture of something recognizable, abstract logos allow you to create something truly unique to represent your brand."
            logos={[<img src="./img/bp-logo.jpg" alt=""/>,<img src="./img/pepsi-logo.jpg" alt=""/>,<img src="./img/adidas-logo.jpg" alt=""/>]}
          />

          <DescriptionComponent
            heading = "Mascot Logos"
            description= "Mascot logos are logos that involve an illustrated character. Often colorful, sometimes cartoonish, and most always fun, the mascot logo is a great way to create your very own brand spokesperson. A mascot is simply an illustrated character that represents your company. Think of them as the ambassador for your business. Famous mascots include the Kool-Aid Man, KFC’s Colonel and PUB&#8217;s cute Water Wally."
            logos={[<img src="./img/kool-logo.jpg" alt=""/>,<img src="./img/kfc-logo.jpg" alt=""/>,<img src="./img/pub-logo.jpg" alt=""/>]}
          />

          <DescriptionComponent
            heading = "Combination Logos"
            description= "A combination mark is a logo comprised of a combined wordmark or lettermark and a pictorial mark, abstract mark, or mascot. The picture and text can be laid out side-by-side, stacked on top of each other, or integrated together to create an image. Because a name is associated with the image, a combination mark is a versatile choice, with both the text and icon or mascot working together to reinforce your brand."
            logos={[<img src="./img/doritos-logo.jpg" alt=""/>,<img src="./img/burger-logo.jpg" alt=""/>,<img src="./img/lacoste-logo.jpg" alt=""/>]}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
