async function generateBranding() {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_API_KEY`
        },
        body: JSON.stringify({
            model: 'gpt-4',
            messages: [
                { role: 'system', content: 'Actúa como un mentor de negocios.' },
                { role: 'user', content: 'Crea un branding para un negocio.' }
            ]
        })
    });
    const data = await response.json();
    document.getElementById('branding-output').innerText = data.choices[0].message.content;
}

async function optimizeSocialMedia() {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_API_KEY`
        },
        body: JSON.stringify({
            model: 'gpt-4',
            messages: [
                { role: 'system', content: 'Actúa como un mentor de redes sociales.' },
                { role: 'user', content: 'Optimiza mis redes sociales.' }
            ]
        })
    });
    const data = await response.json();
    document.getElementById('social-output').innerText = data.choices[0].message.content;
}

async function generateCampaigns() {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_API_KEY`
        },
        body: JSON.stringify({
            model: 'gpt-4',
            messages: [
                { role: 'system', content: 'Actúa como un mentor de campañas publicitarias.' },
                { role: 'user', content: 'Crea campañas publicitarias para mi negocio.' }
            ]
        })
    });
    const data = await response.json();
    document.getElementById('campaigns-output').innerText = data.choices[0].message.content;
}