import React from "react";
import "./homebanner.css";
import homeproducts from '../../../homeproducts.json';

const homebanner = () => {
  return (
    <div className="homebanner">
        <img
        className="homebannerimg"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/Nov_New_3000x1200._CB542180708_.jpg"
        alt="homebanner"
        />
        <div className="graybackground"></div>

        <div className="homebanneritem">
            {
            homeproducts.product.map((item,index)=>
            {
                return(
                    <div className="gridcard">
                        <div className="gridcardtitle">{item.cardtitle}</div>
                        <div className="flexitems">
                            <div className="flexcard">                                
                                {item.image.map((items,ind)=>{
                                    return(
                                        <div>
                                            <img className="imagesize" src={items.link} alt={items.title} />
                                            <div className="flexcardtitle"> {items.title} </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>                    
                )
            })
            }
        </div>
    </div>
  );
};

export default homebanner;
