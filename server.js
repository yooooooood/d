const express = require('express');
const app = express();

app.get('/redirect', (req, res) => {
    const { lat, lon } = req.query;

    if (lat && lon) {
        const latitude = parseFloat(lat);
        const longitude = parseFloat(lon);

        // Exemple de conditions de redirection
        if (latitude >= 45.517500 && latitude <= 45.517800 && longitude >=  4.930800 && longitude <=  4.931800) {
            res.redirect('https://linktr.ee/inspectorpepin');
        }
    } else {
        res.send('Coordonnées non fournies');
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
