import React, { useState } from "react";

function AddTeacher() {
  const [teacherName, setTeacherName] = useState("");

  const handleAddTeacher = () => {
    // Implement logic to add a teacher (e.g., send a POST request to an API)
    console.log("Adding teacher:", teacherName);
  };

  return (
    <div>
      <h2>Add Teacher</h2>
      <input
        type="text"
        placeholder="Teacher Name"
        value={teacherName}
        onChange={(e) => setTeacherName(e.target.value)}
      />
      <button onClick={handleAddTeacher}>Add</button>
    </div>
  );
}

export default AddTeacher;
