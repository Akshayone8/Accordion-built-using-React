import React,{useState} from 'react';
import data from './data';
import SingleQuestion from './SingleQuestion';

function App() {
  const [questions,setQuestions]=useState(data);

  return (
    <main>
      <div className='container'>
        <h3>Hello World</h3>
        <section className='info'>
          {questions.map((question)=>{
            return <SingleQuestion key={question.id} {...question}/>
          })}
        </section>
      </div>
      
    </main>
  );
}

export default App;
