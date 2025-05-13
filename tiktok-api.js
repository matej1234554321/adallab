document.getElementById('connectBtn').addEventListener('click', connectAccount);

async function connectAccount() {
    const premiumResults = document.getElementById('premiumResults');
    premiumResults.innerHTML = '<p>Prebieha pripájanie k vášmu účtu...</p>';
    
    try {
        // Simulácia pripojenia k API
        const response = await simulateTikTokConnection();
        
        premiumResults.innerHTML = `
            <h3>Prémiový prístup aktivovaný</h3>
            <p>Úspešne prepojené s účtom: ${response.username}</p>
            <p>60 reklám bude náhodne nahrávaných počas 2 mesiacov.</p>
            <p>Prvá reklama bude nahraná: ${response.firstUploadDate}</p>
        `;
    } catch (error) {
        premiumResults.innerHTML = `<p class="error">Chyba pri pripájaní: ${error.message}</p>`;
    }
}

function simulateTikTokConnection() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const date = new Date();
            date.setDate(date.getDate() + 1);
            
            resolve({
                username: 'test_uzivatel',
                firstUploadDate: date.toLocaleDateString(),
                status: 'active'
            });
        }, 1500);
    });
}