import React from 'react';
import '../Styles/About.css';
import '../Styles/Icons.css';
import { Icon } from '@iconify/react';

export default function About() {

    const skillIcons = [
        <Icon icon="vscode-icons:file-type-html" />,
        <Icon icon="vscode-icons:file-type-css" />,
        <Icon icon="logos:javascript" />,
        <Icon icon="vscode-icons:file-type-reactjs" />,
        <Icon icon="vscode-icons:file-type-python" />,
        <Icon icon="logos:c-sharp" />,
        <Icon icon="logos:git-icon" />,
        <Icon icon="carbon:logo-github" />,
        <Icon icon="logos:figma" />,
        <Icon icon="vscode-icons:file-type-photoshop" />,
        <Icon icon="vscode-icons:file-type-arduino" />,
        <Icon icon="flat-color-icons:google" />
    ]
    const skillNames = [
        'html',
        'css',
        'javascript',
        'react',
        'python',
        'csharp',
        'git',
        'github',
        'figma',
        'photoshop',
        'arduino',
        'google'
    ]

    return (
        <section id='about'>
            
            <div id="sideby">
                <div>
                    <h3>About Me</h3>
                    <p id="aboutInfo">
                        Hi, I'm a Front-End Developer located in Finland.
                        I love programming and designing the <span id="interwebs" className="text-highlights">interwebs</span> as well as
                        finding new interesting ways to solve <span id="problems" className="text-highlights">problems</span> with Python and C#.
                        I also love to play music!

                        <br /><br />

                        I'm currently studying Mehcanical Engineering in Aalto University as a B.Sc student.
                    </p>
                </div>
                

                <div className="skills">
                    {
                        skillIcons.map((tech, i) => {
                            return <p key={skillNames[i]} id={skillNames[i]}>{tech}</p>
                        })
                    }
                </div>
            </div>
            
        </section>
    )
}