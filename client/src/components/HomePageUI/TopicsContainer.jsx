const topics = [
  { id: 1, name: 'Clothing' },
  { id: 2, name: 'Technology' },
  { id: 3, name: 'Travel' },
  { id: 4, name: 'Food and Drink' },
  { id: 5, name: 'Fitness' },
  { id: 6, name: 'Movies' },
  { id: 7, name: 'Music' },
  { id: 8, name: 'Books' },
  { id: 9, name: 'Art and Design' },
  { id: 10, name: 'Sports' },
  // Add more topics as needed
];

export default function TopicsContainer(props) {
  return (
    <div className="topics-container bg-dark">
      {topics.map((topic, index) => (
        <button 
          key={topic.id}
          className="topic-btn"
        >
          <h4>{topic.name}</h4>      
        </button>
      ))}  
    </div>
  );
}