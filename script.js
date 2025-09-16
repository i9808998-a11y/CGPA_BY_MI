function calculateCGPA() {
    let prevCgpa = parseFloat(document.getElementById('prevCgpa').value);
    let prevCredits = parseFloat(document.getElementById('prevCredits').value);
    let thisGpa = parseFloat(document.getElementById('thisGpa').value);
    let thisCredits = parseFloat(document.getElementById('thisCredits').value);

    if(isNaN(prevCgpa) || isNaN(prevCredits) || isNaN(thisGpa) || isNaN(thisCredits)) {
        document.getElementById('result').innerText = "Please fill all fields correctly!";
        return;
    }

    let newCgpa = ((prevCgpa * prevCredits) + (thisGpa * thisCredits)) / (prevCredits + thisCredits);
    document.getElementById('result').innerText = `Your Updated CGPA is: ${newCgpa.toFixed(2)}`;
}
