var xhr = new XMLHttpRequest();
var url = './random_file.json'; // Updated file extension to .json, as the data is in JSON format.

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function () {
        var identities = xhr.response; // The response contains an array of objects.
        var articlesDiv = document.getElementById('articles'); // Correct div ID.

        identities.forEach(function (identity) {
            var identityDiv = document.createElement('div');
            identityDiv.classList.add('identity');

            var name = document.createElement('h2');
            name.textContent = identity.name;

            var language = document.createElement('p');
            language.textContent = `Language: ${identity.language}`;

            var idHeader = document.createElement('h3');
            idHeader.textContent = 'ID:';

            var idValue = document.createElement('p');
            idValue.textContent = identity.id;

            var bioHeader = document.createElement('h3');
            bioHeader.textContent = 'Bio:';

            var bioContent = document.createElement('p');
            bioContent.textContent = identity.bio;

            var versionHeader = document.createElement('h3');
            versionHeader.textContent = 'Version:';

            var versionContent = document.createElement('p');
            versionContent.textContent = identity.version;

            // Append all elements to the identity div
            identityDiv.appendChild(name);
            identityDiv.appendChild(language);
            identityDiv.appendChild(idHeader);
            identityDiv.appendChild(idValue);
            identityDiv.appendChild(bioHeader);
            identityDiv.appendChild(bioContent);
            identityDiv.appendChild(versionHeader);
            identityDiv.appendChild(versionContent);

            // Append the identity div to the articlesDiv
            articlesDiv.appendChild(identityDiv);
        });
};

// Send the request to fetch the data
xhr.send();
