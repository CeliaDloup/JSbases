// 1. objet pour traduire les types
jsonDatas.forEach(item => console.log(item));

// 2. créer un objet pour traduire les types
const typeTranslations = {
    car: "Voiture",
    house: "Maison",
    game: "Jeu de société",
    videoGame: "Jeu vidéo",
    show: "Spectacle",
};


// 3. Ajouter une clé pour stocker le type traduit
jsonDatas.forEach((article) => {
    article.translatedType = typeTranslations[article.type] || article.type;
    console.log(article); // Vérifiez que la clé est ajoutée
});

// 4. lister les articles


function displayArticlesInTable() {
    const tableBody = document.getElementById("articleTable").querySelector("tbody");
    tableBody.innerHTML = ""; // Réinitialiser le tableau

    jsonDatas.forEach(category => {
        category.items.forEach(item => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.description || "N/A"}</td>
                <td>${item.price}€</td>
                <td>${item.quantity}</td>
                <td>${item.contact.firstName} ${item.contact.lastName}, ${item.contact.address}</td>
            `;

            tableBody.appendChild(row);
        });
    });
}
document.addEventListener("DOMContentLoaded", () => {
    displayArticlesInTable();
});


// 5. Champ de texte
function filterByType() {
    const filterValue = document.getElementById("filterType").value.toLowerCase();
    const filteredArticles = jsonDatas.filter((article) =>
        article.type.toLowerCase().includes(filterValue)
    );

    // Afficher les articles filtrés
    const articleList = document.getElementById("articleList");
    articleList.innerHTML = ""; // Réinitialiser la liste
    filteredArticles.forEach((article) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${article.name} - ${article.translatedType} - ${article.price}€`;
        articleList.appendChild(listItem);
    });
}

//6. checkbox articles en stocks 
function filterByType() {
    const filterValue = document.getElementById("filterType").value.toLowerCase();
    const showInStockOnly = document.getElementById("inStock").checked;

    const filteredArticles = jsonDatas.filter((article) => {
        const matchesType = article.type.toLowerCase().includes(filterValue);
        const matchesStock = !showInStockOnly || article.quantity > 0;
        return matchesType && matchesStock;
    });

    // Afficher les articles filtrés
    const articleList = document.getElementById("articleList");
    articleList.innerHTML = ""; // Réinitialiser la liste
    filteredArticles.forEach((article) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${article.name} - ${article.translatedType} - ${article.price}€`;
        articleList.appendChild(listItem);
    });
}

// 7. Tri par nom ou prix
function sortArticles() {
    const criteria = document.getElementById("sortCriteria").value;
    const order = document.getElementById("sortOrder").value;

    const sortedArticles = [...jsonDatas].sort((a, b) => {
        if (order === "asc") {
            return a[criteria] > b[criteria] ? 1 : -1;
        } else {
            return a[criteria] < b[criteria] ? 1 : -1;
        }
    });

    // Afficher les articles triés
    const articleList = document.getElementById("articleList");
    articleList.innerHTML = ""; // Réinitialiser la liste
    sortedArticles.forEach((article) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${article.name} - ${article.translatedType} - ${article.price}€`;
        articleList.appendChild(listItem);
    });
}
// Ajouter un formulaire simple permettant d'ajouter un article à la liste.  
function addArticle() {
    const newName = document.getElementById("newName").value;
    const newType = document.getElementById("newType").value;
    const newDescription = document.getElementById("newDescription").value;
    const newPrice = parseFloat(document.getElementById("newPrice").value);
    const newQuantity = parseInt(document.getElementById("newQuantity").value, 10);

    const newArticle = {
        name: newName,
        type: newType,
        description: newDescription,
        price: newPrice,
        quantity: newQuantity,
        translatedType: typeTranslations[newType] || newType,
    };

    jsonDatas.push(newArticle);
    filterByType(); // Rafraîchir la liste avec les nouveaux articles
}

// 10. Afficher tous les contacts
function displayContacts() {
    const contactList = document.getElementById("contactList");
    contactList.innerHTML = ""; // Réinitialiser la liste

    jsonDatas.forEach(category => {
        category.items.forEach(item => {
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = `${item.contact.firstName} ${item.contact.lastName} - ${item.contact.address}`;
            contactList.appendChild(li);
        });
    });
}
// appeler la fonction 
document.addEventListener("DOMContentLoaded", () => {
    displayContacts();
});

// 11. Faire fonctionner la page avec la nouvelle structure.
function displayArticles() {
    const articleList = document.getElementById("articleList");
    articleList.innerHTML = ""; // Réinitialiser la liste

    jsonDatas.forEach(category => {
        category.items.forEach(item => {
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = `${item.name} - ${item.description} (${item.price}€)`;
            articleList.appendChild(li);
        });
    });
}
// Filtrer les articles par type
function filterByType() {
    const filter = document.getElementById("filterType").value.toLowerCase();
    const articleList = document.getElementById("articleList");
    articleList.innerHTML = ""; // Réinitialiser la liste

    jsonDatas.forEach(category => {
        if (category.type.toLowerCase().includes(filter)) {
            category.items.forEach(item => {
                const li = document.createElement("li");
                li.className = "list-group-item";
                li.textContent = `${item.name} - ${item.description} (${item.price}€)`;
                articleList.appendChild(li);
            });
        }
    });
}
// Ajouter un article
function addArticle() {
    const type = document.getElementById("newType").value.toLowerCase();
    const category = jsonDatas.find(c => c.type.toLowerCase() === type);
    
    const newItem = {
        name: document.getElementById("newName").value,
        description: document.getElementById("newDescription").value,
        price: parseFloat(document.getElementById("newPrice").value),
        quantity: parseInt(document.getElementById("newQuantity").value),
        contact: {
            lastName: "Inconnu",
            firstName: "Inconnu",
            address: "Inconnu"
        }
    };

    if (category) {
        category.items.push(newItem);
    } else {
        jsonDatas.push({
            type: type,
            items: [newItem]
        });
    }

    displayArticles();
    displayContacts();
}

// trier les articles
function sortArticles() {
    const criteria = document.getElementById("sortCriteria").value;
    const order = document.getElementById("sortOrder").value;
    const isAscending = order === "asc";

    jsonDatas.forEach(category => {
        category.items.sort((a, b) => {
            if (criteria === "name") {
                return isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
            } else if (criteria === "price") {
                return isAscending ? a.price - b.price : b.price - a.price;
            }
        });
    });

    displayArticles();
}


console.log("exo-7");

console.log(jsonDatas);