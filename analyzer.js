document.getElementById('analyzeBtn').addEventListener('click', analyzeImage);

async function analyzeImage() {
    const fileInput = document.getElementById('imageUpload');
    const resultsDiv = document.getElementById('results');
    const premiumSection = document.getElementById('premiumSection');
    
    if (!fileInput.files.length) {
        alert('Prosím, vyberte obrázok pre analýzu.');
        return;
    }

    resultsDiv.innerHTML = '<p class="loading">Prebieha analýza obrázka...</p>';
    
    try {
        // Simulácia analýzy obrázka
        const analysisResult = await simulateImageAnalysis(fileInput.files[0]);
        
        resultsDiv.innerHTML = `
            <h3>Výsledky analýzy</h3>
            <p><strong>Typ produktu:</strong> ${analysisResult.productType}</p>
            <p><strong>Odporúčaný štýl:</strong> ${analysisResult.recommendedStyle}</p>
            <p><strong>Počet nájdených reklám:</strong> ${analysisResult.adsFound}</p>
        `;
        
        premiumSection.style.display = 'block';
    } catch (error) {
        resultsDiv.innerHTML = `<p class="error">Chyba pri analýze: ${error.message}</p>`;
    }
}

function simulateImageAnalysis(file) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const mockResults = {
                productType: 'Kozmetický produkt',
                recommendedStyle: 'Dynamický, rýchly strih',
                adsFound: Math.floor(Math.random() * 100) + 20
            };
            resolve(mockResults);
        }, 2000);
    });
}