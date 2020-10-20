import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/1917/EVREF_OCT20_GWBleedingHero_FT_XSite_1500X600_PV_en-GB._CB419087828_.jpg" 
                    alt="" />

                    <div className="home_row">
                        <Product 
                        id="2153351"
                        title="The Learn Startup" 
                        image="https://images-na.ssl-images-amazon.com/images/I/51-cYrw1XpL._AC_SY400_.jpg"
                        price={29.99}
                        rating={3}
                        />
                        <Product 
                        id="61358315"
                        title="Amazon Echo (3rd Generation | Smart Speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={4}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                        />
                    </div>

                    <div className="home_row">
                        <Product 
                        id="61358315"
                        title="Kingston 1TB A2000 M.2 2280 Nvme Internal SSD PCIe Up to 2000MB/S with Full Security Suite SA2000M8/1000G"
                        price={188.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/717oOLeCxtL._AC_SL1500_.jpg"
                        />
                        <Product 
                        id="568425834"
                        title="ZOTAC GeForce GTX 1080 AMP! Extreme, ZT-P10800B-10P, 8GB GDDR5X IceStorm Cooling, Metal Wraparound Carbon ExoArmor exterior, Dual-blade EKO Fan Gaming Graphics Card (Renewed)"
                        price={985.99}
                        rating={2}
                        image="https://images-na.ssl-images-amazon.com/images/I/81fHxWzM%2BcL._AC_SL1500_.jpg"
                        />
                        <Product
                        id="2516436435"
                        title="AMD Ryzen 9 3950X 16-Core, 32-Thread Unlocked Desktop Processor, Without Cooler"
                        price={709.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/7122uH4-hfL._AC_SL1121_.jpg"
                        />
                    </div>

                    <div className="home_row">
                        <Product 
                        id="61358315"
                        title="Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor"
                        price={899.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg"
                        />
                    </div>

                    
            </div>
        </div>
    )
}

export default Home
