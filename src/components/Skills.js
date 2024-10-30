import React from "react";
import { Container, Table, Image } from "react-bootstrap";
import reactIcon from '../images/reactIcon.png';
import htmlIcon from '../images/htmlIcon.png';
import jsIcon from '../images/jsIcon.png';
import cssIcon from '../images/cssIcon.png';
import cppIcon from '../images/cppIcon.png';
import cIcon from '../images/cIcon.png';
import pythonIcon from '../images/pythonIcon.png';
import javaIcon from '../images/javaIcon.png';
import gitIcon from '../images/gitIcon.png';
import gitHubIcon from '../images/gitHubIcon.png';
import nodeJSIcon from '../images/nodeJSIcon.png';
import mongoDBIcon from '../images/mongoDBIcon.png';
import mySQLIcon from '../images/mySQLIcon.png';
import bootstrapIcon from '../images/bootstrapIcon.png';
import jqueryIcon from '../images/jqueryIcon.png';
import TailwindCSSIcon from '../images/TailwindCSSIcon.png';
import nextJsIcon from '../images/nextJsIcon.png';
import cSharpIcon from '../images/cSharpIcon.png';
import TypeScriptIcon from '../images/TypeScriptIcon.png';

const Skills = () => {

  return (
    <section id="skills">
      <Container className="my-5">
        <h3 className="skillsTitle">Skills</h3>
        <br />
        <br />
        <Table borderless className="Skills">
          <tbody>

            {/*first row*/}

            <tr>
              <td className="text-center">
                <Image src={javaIcon} alt="Java" className="skillsImageSize" />
                <p>Java</p>
              </td>
              <td className="text-center">
                <Image src={pythonIcon} alt="Python" className="skillsImageSize" />
                <p>Python</p>
              </td>
              <td className="text-center">
                <Image src={cppIcon} alt="C++" className="skillsImageSize" />
                <p>C++</p>
              </td>
            </tr>

            {/*second row*/}

            <tr>
              <td className="text-center">
                <Image src={cIcon} alt="C" className="skillsImageSize" />
                <p>C</p>
              </td>
              <td className="text-center">
                <Image src={cSharpIcon} alt="cSharpIcon" className="skillsImageSize" />
                <p>C#</p>
              </td>
              <td className="text-center">
                <Image src={htmlIcon} alt="HTML" className="skillsImageSize" />
                <p>HTML</p>
              </td>
            </tr>

            {/*third row*/}
            <tr>
              <td className="text-center">
                <Image src={cssIcon} alt="CSS" className="skillsImageSize" />
                <p>CSS</p>
              </td>
              <td className="text-center">
                <Image src={jsIcon} alt="JavaScript" className="skillsImageSize" />
                <p>JavaScript</p>
              </td>
              <td className="text-center">
                <Image src={TypeScriptIcon} alt="TypeScript" className="skillsImageSize" />
                <p>TypeScript</p>
              </td>
            </tr>

            {/*fourth row*/}

            <tr>
              <td className="text-center">
                <Image src={jqueryIcon} alt="jQuery" className="skillsImageSize" />
                <p>jQuery</p>
              </td>
              <td className="text-center">
                <Image src={bootstrapIcon} alt="Bootstrap" className="bootstrapImageSize" />
                <p>Bootstrap</p>
              </td>
              <td className="text-center">
                <Image src={TailwindCSSIcon} alt="TailwindCSS" className="skillsImageSize" />
                <p>Tailwind CSS</p>
              </td>
            </tr>

            {/*fifth row*/}

            <tr>
              <td className="text-center">
                <Image src={reactIcon} alt="ReactJs" className="skillsImageSize" />
                <p>React.js</p>
              </td>
              <td className="text-center">
                <Image src={nextJsIcon} alt="NextJs" className="skillsImageSize" />
                <p>Next.js</p>
              </td>
              <td className="text-center">
                <Image src={nodeJSIcon} alt="NodeJs" className="skillsImageSize" />
                <p>Node.js</p>
              </td>
            </tr>

            {/*sixth row*/}

            <tr>
              <td className="text-center">
                <Image src={mongoDBIcon} alt="MongoDB" className="skillsImageSize" />
                <p>MongoDB</p>
              </td>
              <td className="text-center">
                <Image src={mySQLIcon} alt="MySQL" className="skillsImageSize" />
                <p>MySQL</p>
              </td>
              <td className="text-center">
                <Image src={gitIcon} alt="Git" className="skillsImageSize" />
                <p>Git</p>
              </td>
            </tr>

            {/*seventh row*/}

            <tr>
              <td className="text-center">
                <Image src={gitHubIcon} alt="GitHub" className="skillsImageSize" />
                <p>GitHub</p>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </section>
  );
};

export default Skills;
