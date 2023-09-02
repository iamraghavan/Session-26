import React from "react";

function StudentList() {
  // Mock data (replace with actual data)
  const students = [
    { id: 1, name: "Student 1" },
    { id: 2, name: "Student 2" }
    // Add more students as needed
  ];

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
