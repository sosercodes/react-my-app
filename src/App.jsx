import './App.css'

function App() {
  var books = [
    {id: 1, author: "Marijn Haverbeke", title:"Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming"},
    {id: 2, author: "Robert C. Martin", title:"Clean Code: A Handbook of Agile Software Craftsmanship"},
    {id: 3, author: "Maximilian Schwarzmüller", title:"React Key Concepts: Consolidate your knowledge of React's core features"},
  ];
  return (
    <>
      <h1>React Lists</h1>
      <div className="card">
        <ul>
          {
          books.map((item) =>
            <li key={item.id}><strong>{item.author}:</strong> {item.title}</li>)
          }
        </ul>
      </div>
    </>
  )
}

export default App
