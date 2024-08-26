import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
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
                {/* 30 */}
                As a passionate front-end developer, I specialize in crafting visually appealing and user-friendly web interfaces. With a strong foundation in HTML, CSS, JavaScript, ReactJS, Bootstrap, and Flutter, I bring a diverse skill set to every project. My recent internship at Techweu provided valuable hands-on experience, solidifying my understanding of industry best practices and enabling me to contribute effectively to collaborative development teams.
            </div>
            
            <a href="/democv.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
             My CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/avatar.png" alt="" />
            </div>
        </div>
    </section>
    )
}

export default Home
