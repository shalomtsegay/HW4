//object constructor
let Workout = function(pName, pLength, pCalories) {
  this.name= pName;
  this.length = ParseInt(pLength);
  this.calories = ParseInt(pCalories);
}

//create array
let WorkoutArray = [];


WorkoutArray.push( new Workout("sit-ups", 5, 50 ));
WorkoutArray.push( new Workout("push-ups", 6, 90 ));


//submit button function
document.getElementById("submit-button").onclick = function ()
{ 
let exercise = document.querySelector('input[name="exercise"]:checked').value;
let duration = document.getElementById("duration").value;
var caloriesBurned;
        if (exercise === "push-ups") {
          caloriesBurned = duration * 15;
        } else if (exercise === "sit-ups") {
          caloriesBurned = duration * 10;
        } else if (exercise === "jump-rope") {
          caloriesBurned = duration * 18;
        }
       WorkoutArray.push({exercise: exercise, duration: duration, caloriesBurned: caloriesBurned});
       alert("You selected: " + exercise + "\nDuration: " + duration + " minutes\nCalories burned: " + caloriesBurned);
      };

//most burned function
document.getElementById("most-burned-button").onclick = function (){
    let biggestCals = 0;
    for (i = 0; i < WorkoutArray.length; i++) {
        if (WorkoutArray[i].calories > WorkoutArray[biggestCals].calories)
        {
            biggestCals = i;
        }
    }
    document.getElementById("most-burned-space").value = WorkoutArray[biggestCals].name + " " + WorkoutArray[biggestCals].calories;
}


//show all function
document.getElementById("show-all-button").onclick = function ()
{
  array.forEach(function(obj)
  {document.getElementById("show-all-space").value = WorkoutArray[i].name + " " + WorkoutArray[i].length + " " + WorkoutArray[i].calories;})
}




