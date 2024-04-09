import profilePic from '@/assets/images/profilepic.jpg'
import './about.scss'
import { Button, Slideshow } from '@/components'
import { motion } from 'framer-motion'
import { stack } from '@/assets/data/techstack'
import { useState } from 'react'
import github from '@/assets/icons/github.svg'
import linkedIn from '@/assets/icons/linkedin.svg'



export default function About(): JSX.Element {

    const [[page, direction], setPage] = useState<[number, number]>([0, 0]);


    const paginate = (newPage: number): void => {
        let finalNewPage = newPage + page;
        if (finalNewPage === stack.length) {
            finalNewPage = 0
        } else if (finalNewPage === -1) {
            finalNewPage = stack.length - 1
        }

        setPage([finalNewPage, newPage])
    }

    return (
        <motion.div
            animate={{ opacity: 1, transition: { duration: 1 } }}
            className='about'
            initial={{ opacity: 0 }}
        >
            <div className='aboutMe'>
                <div className="personalInfo">
                    <article>
                        <h1>Nathaniel Nunez</h1>
                        <div className="socialMedia">
                            <ul>
                                <li><a href='https://github.com/natnunez1996'><img src={github} /></a></li>
                                <li><a href='https://www.linkedin.com/in/nathaniel-nunez-1a89a5210'><img src={linkedIn} /></a></li>
                            </ul>
                        </div>
                        <p>Hi, I am Nathaniel Nunez. Born and grew up in the Philippines.
                            I am currently in the middle of finding my first job in the Tech Industry!
                        </p>


                    </article>


                    <figure>
                        <img src={profilePic} alt="Nathaniel's Picture" />
                    </figure>
                </div>
                <div className="education">
                    <h1>Education</h1>
                    <h3><a href='https://www.mohawkcollege.ca/'>Mohawk College</a></h3>
                    <h3>C.S. Technician - Software Support</h3>
                    <p><em>GPA:</em> 83.3</p>
                </div>
                <div className="techStack">
                    <h2>Tech Stack:</h2>

                    <div className="techStack-body">
                        <div className="prev">
                            <Button onClick={() => { paginate(-1) }}>
                                {" ‣ "}
                            </Button>
                        </div>
                        <Slideshow data={stack} direction={direction} page={page} />
                        <Button onClick={() => { paginate(1) }}>
                            {" ‣ "}
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}