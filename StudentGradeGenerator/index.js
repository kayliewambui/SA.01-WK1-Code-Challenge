function getGrade(marks) {
    // Validate input to be between 0 and 100
    if (marks < 0 || marks > 100) {
      return "Invalid marks. Input must be between 0 and 100.";
    }
  
    // Determine grade based on marks
    if (marks >= 80) {
      return "A";
    } else if (marks >= 60) {
      return "B";
    } else if (marks >= 50) {
      return "C";
    } else if (marks >= 40) {
      return "D";
    } else {
      return "E";
    }
  }
  
  let marks = 85; // Replace 85 with any value between 0 and 100 for testing
  const grade = getGrade(marks);
  
  console.log(grade);