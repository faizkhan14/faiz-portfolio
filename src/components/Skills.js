import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
  {
    name: 'HTML',
    des: 'HTML (HyperText Markup Language) is the fundamental building block of web pages. It defines the structure and content of a webpage using tags to mark up elements like headings, paragraphs, images, links, and more. HTML creates the basic framework that other technologies like CSS (for styling) and JavaScript (for interactivity) can enhance.',
    icon: faHtml5
  },
  {
    name: 'CSS',
    des: 'CSS, or Cascading Style Sheets, is a language used to style HTML elements. It controls the appearance of web pages, including colors, fonts, layout, and more. CSS separates the content (HTML) from the presentation (CSS), making web development more efficient and maintainable.',
    icon: faCss3
  },
  {
    name: 'Javascript',
    des: 'JavaScript is a versatile programming language used to create interactive web pages. It runs directly in the users web browser, allowing for dynamic content, animations, and user interactions. JavaScript is essential for modern web development, powering everything from simple form validations to complex web applications.',
    icon: faJs
  },
  {
    name: 'ReactJs',
    des: 'ReactJS is a JavaScript library for building user interfaces. It uses a component-based architecture to create reusable and efficient code. React is known for its virtual DOM, which efficiently updates only the necessary parts of the UI, resulting in high performance. ',
    icon: faReact
  },
  {
    name: 'Flutter',
    des: 'Flutter is a free and open-source UI software development kit created by Google. It is used to develop cross-platform applications for Android, iOS, Windows, macOS, Linux, and the web from a single codebase.',
   
  },
  

]);
  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        My Skills
       </div>
       
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills

