import React, {useState} from 'react'
import './Slider.css'
import dataSlider from './dataSlider'
import BtnSlider from './BtnSlider'



export default function Slider() {

    const [slideAnim, setSlideAnim] = useState({
        index: 1,
        inProgress: false
    })
    
    const nextSlide = () => {

        //si slideAnim.index est different de la longueur de dataSlider et que slideAnim.inProgress est different de true 
        if(slideAnim.index !== dataSlider.length && !slideAnim.inProgress) {

            //alors on fait index +1
            setSlideAnim({index: slideAnim.index +1, inProgress: true} )


            //nous mettons un timer à 0.4s pour eviter le spam Click
            setTimeout(() => {

                //vu que le setTimeout est fait en meme temps nous somme obliger de mettre index: slideAnim.index + 1 et on repasse inProgress à false sinon nous ne pouvons plus repasser dans la boucle pour passer à une autre image
                setSlideAnim({index: slideAnim.index +1, inProgress: false})
            }, 400)

        }

        //si slideAnim.index est strictement egale à la longueur de dataSlider et que slideAnim.inProgress est different de true 
        else if (slideAnim.index === dataSlider.length && !slideAnim.inProgress) {

            //alors on revient à index:1 (1 etant la premiere image (index:1))
            setSlideAnim({index: 1, inProgress: true} )

            //nous mettons un timer à 0.4s pour eviter le spam Click
            setTimeout(() => {

                //vu que le setTimeout est fait en meme temps nous somme obliger de mettre index: 1 et on repasse inProgress à false sinon nous ne pouvons plus repasser dans la boucle pour passer à une autre image
                setSlideAnim({index: 1, inProgress: false})
            }, 400)
        }
    }

    const prevSlide = () => {

         //si slideAnim.index est different de 1 (1 etant la premiere image (index:1)) et que slideAnim.inProgress est different de true 
         if(slideAnim.index !== 1 && !slideAnim.inProgress) {

            //alors on fait index -1
            setSlideAnim({index: slideAnim.index -1, inProgress: true} )

            //nous mettons un timer à 0.4s pour eviter le spam Click
            setTimeout(() => {

                //vu que le setTimeout est fait en meme temps nous somme obliger de mettre index: slideAnim.index - 1 et on repasse inProgress à false sinon nous ne pouvons plus repasser dans la boucle pour passer à une autre image
                setSlideAnim({index: slideAnim.index -1, inProgress: false})
            }, 400)

        }

        //si slideAnim est strictement egale à 1 (1 etant la premiere image (index:1)) et que slideAnim.inProgress est different de true 
        else if (slideAnim.index === 1 && !slideAnim.inProgress) {

            // alors on revient a la derniere image de dataSlider
            setSlideAnim({index: dataSlider.length , inProgress: true} )

            //nous mettons un timer à 0.4s pour eviter le spam Click
            setTimeout(() => {

                //vu que le setTimeout est fait en meme temps nous somme obliger de mettre index: dataSlider.length et on repasse inProgress à false sinon nous ne pouvons plus repasser dans la boucle pour passer à une autre image
                setSlideAnim({index: dataSlider.length, inProgress: false})
            }, 400)
        }
    }

    const moveDot = index => {

        //quand on click on recupere l'index et cela nous renvoie sur la bonne image
        setSlideAnim({index: index, inProgress: false})
    }


    return (
        <div className='container-slider'>
            {dataSlider.map((obj, index) => {

                return (
                    <div
                        //obj.id est égal à dataSlide (objet) 
                        key={obj.id}
                        // index + 1 car on à defini index:1 au dessus
                        // si c'est true alors on lui inject la class active-anim sinon on met la class slide
                        className={slideAnim.index === index + 1 ? 'slide active-anim' : 'slide'}
                    >
                        {/* process.env.PUBLIC_URL va nous servir pour que les images fonctionnent meme en mode production */}
                        <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt="" />
                    </div>
                )
            })}

            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />


            <div className='container-dots'>
                {/* on creer un tableau et on cherche la longueur selon notre tableau d'image et apres on utilise la fonction map() qui va parcour ce tableau  */}

                {Array.from({length: dataSlider.length}).map((item, index) => {
                    
                    return <button 
                                onClick={() => moveDot(index + 1)}
                                className={slideAnim.index === index + 1 ? 'dot active' : 'dot'}>

                            </button>

                })}
            </div>

        </div>
    )
}

