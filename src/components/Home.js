import React, { useRef } from 'react';
import CustomHook from './CustomHook';
import avatar from './images/avatar.png';

function Home() {
    const scrollTab = useRef();
    CustomHook(scrollTab);

    return (
        <section ref={scrollTab} className='home'>
            <div className="content">
                <div className="name">
                    My Name Is <span>FAIZ</span>
                </div>
                <div className="des">
                    As a passionate front-end developer, I specialize in crafting visually appealing and user-friendly web interfaces. With a strong foundation in HTML, CSS, JavaScript, [ReactJS](https://react.dev/), [Bootstrap](https://getbootstrap.com/), and Flutter, I bring a diverse skill set to every project. My recent internship at Techweu provided valuable hands-on experience, solidifying my understanding of industry best practices and enabling me to contribute effectively to collaborative development teams.
                </div>
                
                <a href="./FaizResume.pdf" target="_blank" rel="noopener noreferrer" className='animation active'>
                    My CV
                </a>
            </div>
            <div className="avatar">
                <div className="card">
                    <img src={avatar} alt="Avatar" />
                </div>
            </div>
        </section>
    );
}

export default Home;
