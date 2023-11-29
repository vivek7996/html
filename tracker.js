document.getElementById('exercise-form').addEventListener('submit', function(e) {
    e.preventDefault();
    addExercise();
});

function addExercise() {
    const exercise = document.getElementById('exercise').value;
    const reps = document.getElementById('reps').value;
    const duration = document.getElementById('duration').value;
    const date = document.getElementById('date').value;

    const li = document.createElement('li');
    li.textContent = `Exercise: ${exercise}, Reps: ${reps}, Duration: ${duration} minutes, Date: ${date}`;

    document.getElementById('exercise-list').appendChild(li);

    // Clear input fields
    document.getElementById('exercise').value = '';
    document.getElementById('reps').value = '';
    document.getElementById('duration').value = '';
    document.getElementById('date').value = '';
}