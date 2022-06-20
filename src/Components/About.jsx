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
        <div id='about'>
            <h3>About Me</h3>
            <div id="sideby">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aspernatur quisquam? Aliquid id voluptatum possimus! Soluta repudiandae laudantium ducimus fugiat.
                    <br /><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quia repellendus modi repellat magnam sed illum doloremque earum quae odit ratione atque deleniti ipsa.
                </p>

                <div className="skills">
                    {
                        skillIcons.map((tech, i) => {
                            return <p key={skillNames[i]} id={skillNames[i]}>{tech}</p>
                        })
                    }
                </div>
            </div>
            
        </div>
    )
}