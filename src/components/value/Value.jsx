import React from 'react'
import{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data  from '../../utils/accordion'


const value = () => {
  return (
    <section className ="v-wrapper">
        <div className ="paddings innerWidth flexCenter v-container">
            <div className ="v-left">
            <div className="image-container">
                <img src="./value.png" alt=""/>
            </div>
            </div>
        

        <div className ="flexColStart v-right">
            <span className='orangeText'>Our Value</span>
            <span className="primaryText">Value We Give</span>
            <span className="secondaryText">We are ready to help you, find you first and last destination.
            <br/>
             Our purpose, to make your living better.
            </span>

            <Accordion
            className='accordion'
            allowMultipleExpanded ={false}
            preExpanded={[0]}>
                {data.map((item, i) =>{
                        return (
                            <AccordionItem className ="accordionItem" key ={i} uuid ={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <div className= "flexCenter icon">{item.icon}</div>
                                           <span className ="primaryText">{item.heading}</span>
                                           <div className ="flexCenter icon">
                                           <MdOutlineArrowDropDown size ={20} />
                                           </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                            </AccordionItem>
                        );
                    })
                }
       </Accordion>
        </div>
        </div>
    </section>
  
  );
};

export default value