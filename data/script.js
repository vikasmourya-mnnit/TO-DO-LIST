// College Data (Example)
const colleges = [
    { name: 'NIT Trichy', closingRank: 229 },
    { name: 'NIT Surathkal', closingRank: 250 },
    { name: 'NIT Warangal', closingRank: 275 },
    { name: 'NIT Calicut', closingRank: 300 },
    { name: 'NIT Nagpur', closingRank: 350 }
];

// On form submission
document.getElementById('college-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const rank = parseInt(document.getElementById('rank').value);
    
    // Validate input
    if (isNaN(rank) || rank <= 0) {
        alert('Please enter a valid rank.');
        return;
    }
    
    // Find eligible colleges
    const eligibleColleges = colleges.filter(college => rank <= college.closingRank);
    
    // Display suggestions
    const resultContainer = document.getElementById('college-suggestions');
    resultContainer.innerHTML = '';
    
    if (eligibleColleges.length > 0) {
        eligibleColleges.forEach(college => {
            const item = document.createElement('li');
            item.textContent = `${college.name} (Closing Rank: ${college.closingRank})`;
            resultContainer.appendChild(item);
        });
    } else {
        resultContainer.innerHTML = '<li>No colleges available for this rank.</li>';
    }
});
