import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';
import project1 from './images/project1.png';
import project2 from './images/project2.png';
import project3 from './images/project3.png';

function Projects() {
  const [listProjects] = useState([
    {
      name: 'Snapper Website',
      des: 'Designed and developed a responsive website for Snapper Energy Drink using HTML, CSS, JavaScript, and Bootstrap.',
      language: 'HTML5, CSS3, JavaScript, Bootstrap',
      images: project1
    },
    {
      name: 'Zoom Clone',
      des: 'Developed a Zoom clone application using Flutter, replicating key features such as video conferencing, chat functionality, and user authentication.',
      language: 'Flutter',
      images: project2
    },
    {
      name: 'Portfolio using React',
      des: 'Developed a dynamic and interactive personal portfolio website using ReactJS, showcasing my skills, projects, and experiences.',
      language: 'React JS',
      images: project3
    },
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className='projects' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        My Projects
      </div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
            <div className="images">
              <img src={value.images} alt={value.name} />
            </div>
            <div className="content">
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
              <div className="mission">
                <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                <div>
                  <h4>Languages</h4>
                  <div className="des">{value.language}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
