function App() {
    return (
      <div>
        <CardWrapper>Hi There 1</CardWrapper><br /><br /><br />
        <CardWrapper>How are you</CardWrapper>
      </div>
    );
  }
  
  // eslint-disable-next-line react/prop-types
  function CardWrapper({ children }) {
    return (
      <span
        style={{
          border: "2px solid black",
          padding: "10px",
          marginLeft: "5px",
          borderRadius: "9px",
        }}
      >
        {children}
      </span>
    );
  }
  
  export default App;
  
