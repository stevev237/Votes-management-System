document.addEventListener('DOMContentLoaded', function() {
    fetch('parties.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('partyList');
        data.forEach(party => {
            const partyDiv = document.createElement('div');
            partyDiv.className = 'party';

            const img = document.createElement('img');
            img.src = party.image;
            img.alt = 'Image of ' + party.name;
            partyDiv.appendChild(img);

            const description = document.createElement('p');
            description.textContent = party.citation;
            partyDiv.appendChild(description);

            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = 'vote';
            radioInput.value = party.name;
            partyDiv.appendChild(radioInput);

            container.appendChild(partyDiv);
        });
    })
    .catch(error => console.error('Error loading the party data:', error));
});
