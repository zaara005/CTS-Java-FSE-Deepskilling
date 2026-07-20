import React from "react";

function App() {

  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  // Method 1 - if...else
  let book;
  if (showBooks) {
    book = (
      <div>
        <h2>Book Details</h2>
        <p>Book: React Basics</p>
        <p>Author: John Smith</p>
        <p>Price: ₹450</p>
      </div>
    );
  } else {
    book = <h2>No Book Details</h2>;
  }

  return (
    <div style={{ margin: "20px" }}>
      <h1>Blogger App</h1>

      <hr />

      {/* Method 1: if...else */}
      {book}

      <hr />

      {/* Method 2: Ternary Operator */}
      {showBlogs ? (
        <div>
          <h2>Blog Details</h2>
          <p>Title: React Conditional Rendering</p>
          <p>Author: Alice</p>
        </div>
      ) : (
        <h2>No Blog Details</h2>
      )}

      <hr />

      {/* Method 3: Logical AND */}
      {showCourses && (
        <div>
          <h2>Course Details</h2>
          <p>Course: React JS</p>
          <p>Duration: 30 Hours</p>
        </div>
      )}
    </div>
  );
}

export default App;