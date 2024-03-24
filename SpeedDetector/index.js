function calculateDemeritPoints(speed) {
    // Validate input to be a number
    if (isNaN(speed)) {
      return "Invalid speed. Please enter a number.";
    }
  
    // Calculate the speed difference above the limit (70 km/h)
    const speedDifference = Math.max(speed - 70, 0);
  
    // Calculate demerit points (1 point for every 5 km/h above limit)
    const demeritPoints = Math.floor(speedDifference / 5);
  
    // Check for suspended license (more than 12 points)
    if (demeritPoints > 12) {
      return "License suspended";
    } else if (demeritPoints === 0) {
      return "Ok";
    } else {
      return `Points: ${demeritPoints}`;
    }
  }
  
  // Get user input for speed
  const speed = 90; // Replace 90 with any desired value for testing
  
  // Calculate and display demerit points or license suspension message
  const result = calculateDemeritPoints(speed);
  console.log(result);