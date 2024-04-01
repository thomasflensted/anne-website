import { useState } from 'react';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import './App.css';
import Contact from './components/Contact';
import TextBlock from './components/TextBlock';

function App() {

  const [language, setLanguage] = useState<'danish' | 'english'>('danish');

  return (
    <div className='font-serifFont'>
      <NavBar setLanguage={setLanguage} language={language} />
      <main className='flex justify-center mt-6'>
        <div className='flex flex-col w-1/2 gap-8'>
          <TextBlock language={language} />
          <Contact />
          <Portfolio language={language} />
        </div>
      </main>
    </div>
  )
}

export default App
