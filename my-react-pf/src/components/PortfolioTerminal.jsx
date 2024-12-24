
import './PortfolioTerminal.css';
import { useState, useEffect, useRef  } from 'react';


function PortfolioTerminal() {
  const [output, setOutput] = useState([]);
  const [input, setInput] = useState('');
  const terminalRef = useRef(null);

  useEffect(() => {
    // Simulate initial terminal output (e.g., ASCII art, greetings)
    const initialOutput = [
      '   ____       _   _            _____                                    ',
      '  / ___|     | | | |          / ____|                                   ',
      ' | |     ___ | |_| | ___     | |     ___  _ __   ___  _ __   ___  _ __  ',
      ' | |    / _ \|  _  |/ _ \    | |    / _ \| \'__| / _ \| \'__| / _ \ | \'__| ',
      ' | |___| (_) | | | | (_) |   | |___| (_) | |   | (_) | |   | (_) | |   | ',
      '  \_____\___/|_| |_|\___/     \_____\___/|_|    \___/|_|    \___/|_|   | ',
      '',
      'Welcome to my portfolio!',
      'Type "help" for a list of commands.',
    ];
    setOutput(initialOutput);

    // Auto-scroll to the bottom
    terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }, []);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();

    const command = input.trim().toLowerCase();
    let newOutput = [];

    if (command === 'help') {
      newOutput = [
        'Available commands:',
        '- projects: View my projects',
        '- skills: View my skills',
        '- contact: Get my contact information',
        '- clear: Clear the terminal',
        '- exit: Exit the terminal'
      ];
    } else if (command === 'projects') {
      newOutput = [
        'Projects:',
        '- Project 1: [Description of Project 1]',
        '- Project 2: [Description of Project 2]',
        '- Project 3: [Description of Project 3]'
      ];
    } else if (command === 'skills') {
      newOutput = ['Skills: JavaScript, React, Node.js, Python, etc.'];
    } else if (command === 'contact') {
      newOutput = ['Contact: email@example.com'];
    } else if (command === 'clear') {
      setOutput([]); 
    } else if (command === 'exit') {
      // Handle exit (e.g., close the terminal, navigate to another page)
      console.log('Exiting terminal...');
    } else {
      newOutput = ['Invalid command. Type "help" for a list of commands.'];
    }

    setOutput([...output, `> ${input}`, ...newOutput, '']); 
    setInput('');

    // Auto-scroll to the bottom
    terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  };

  return (
    <div className="terminal" ref={terminalRef}>
      <div className="terminal-output">
        {output.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      
      <form onSubmit={handleInputSubmit}>
  
  
    <span className="prompt-prefix">
          ant
          <span style={{ color: 'blue',font: '12px; '} }>@</span>portfolio<span style={{color:'read',font: '12px; '}}>$</span>
        </span><input 
    className='inputBox'
    type="text" 
    value={input} 
    onChange={handleInputChange} 
    placeholder="-" 
  />
</form>
</div>
    </div>
  );
}


export default PortfolioTerminal;