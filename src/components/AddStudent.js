import React, { useState } from "react";

function AddStudent() {
  const [studentName, setStudentName] = useState("");

  const handleAddStudent = () => {
    // Implement logic to add a student (e.g., send a POST request to an API)
    console.log("Adding student:", studentName);
  };

  return (
    <div>
      <h2>Add Student</h2>
      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button onClick={handleAddStudent}>Add</button>
    </div>
  );
}

export default AddStudent;
