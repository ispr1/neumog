const fetch = require('node-fetch'); // might not be available
// Or use built-in fetch if Node 18+

async function run() {
    const res = await fetch('http://localhost:3000/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            formType: 'EXPERTS',
            name: 'Test',
            email: 'test@test.com',
            coreSkills: 'Test',
            availability: 'Test',
            portfolioLink: 'Test',
            notes: 'Test'
        })
    });
    console.log('Status:', res.status);
    const data = await res.json();
    console.log('Body:', data);
}

run();
