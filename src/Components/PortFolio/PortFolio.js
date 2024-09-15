import React, { useState } from 'react'
import './PortFolio.css'
import { Filter_data } from '../Assets/Data';
const PortFolio = () => {

    const [filteredData, setFilteredData] = useState(Filter_data);

    const handleCategoryChange = (newCategory) => {
        if (newCategory === "All") {
            setFilteredData(Filter_data);
        } else {
            const filtered = Filter_data.filter(item => item.category === newCategory);
            setFilteredData(filtered);
        }

    };
    return (
        <div className="portfolio">
            <h2 className='portfolio-h2'>portfolio</h2>
            <p className='portfolio-p'>Duis aute irure dolor in reprehen pteur sint occaecat cupidatat non</p>
            <p className='portfolio-p'>proident, sunt in culim id est.</p>
            <div className="port-button">
                <button onClick={() => handleCategoryChange("All")}>All</button>
                <button onClick={() => handleCategoryChange("Programming")}>Programming</button>
                <button onClick={() => handleCategoryChange("Development")}>Development</button>
                <button onClick={() => handleCategoryChange("Design")}>Design</button>
                <button onClick={() => handleCategoryChange("Application")}>Application</button>
            </div>


            <div className="portfolio-conatiner">


                {
                    filteredData.map((item) => {
                        return (
                            
                            <div className="portfolio-card">
                                <img src={item.image} alt="" className="portfolio-card-img" />

                                <div className="portfolio-card-body">
                                    <h1 className="portfolio-card-title">Aditya </h1>
                                    <p className="portfolio-card-sub-title">Full Stack Developer</p>
                                    <p className="portfolio-card-info">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
                                        nobis quia! Molestiae vero quos esse. Voluptatibus incidunt numquam
                                        obcaecati quaerat.
                                    </p>
                                    <button className="portfolio-card-btn">Click Me</button>
                                </div>
                            </div>
                        )

                    })
                }



            </div>


        </div>

    )
}

export default PortFolio
