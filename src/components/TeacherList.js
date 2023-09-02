import React from "react";

function TeacherList() {
  // Mock data (replace with actual data)
  const teachers = [
    { id: 1, name: "Teacher 1" },
    { id: 2, name: "Teacher 2" }
    // Add more teachers as needed
  ];

  return (
    <div>
      <h2>Teacher List</h2>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>{teacher.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TeacherList;
