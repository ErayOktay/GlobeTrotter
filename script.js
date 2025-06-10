document.querySelector("#btnSearch").addEventListener("click", () => {
    let text = document.querySelector("#txtSearch").value.trim();
    let alertBox = document.querySelector("#alertMessage");
    let notFoundBox = document.querySelector("#notFoundMessage");
    let loadingIcon = document.querySelector("#loading");

    // Önce eski uyarıları temizle
    alertBox.classList.add("d-none");
    notFoundBox.classList.add("d-none");

    if (text) {
        loadingIcon.classList.remove("d-none"); // Loading ikonunu göster
        getCountry(text);
    } else {
        alertBox.classList.remove("d-none"); // Ülke adı girilmedi hatasını göster
    }
});

function getCountry(country) {
    const apiUrl = `https://restcountries.com/v3.1/name/${country}`;
    let loadingIcon = document.querySelector("#loading");

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Ülke bulunamadı.");
            }
            return response.json();
        })
        .then(data => {
            if (!data || data.length === 0) {
                throw new Error("Ülke bulunamadı.");
            }
            document.querySelector("#notFoundMessage").classList.add("d-none"); // Hata varsa gizle
            renderCountry(data[0]);

            if (!data[0].borders || data[0].borders.length === 0) {
                document.querySelector("#neighbors").innerHTML = "<p>Komşu ülke bulunamadı.</p>";
                return;
            }

            const neighborUrl = `https://restcountries.com/v3.1/alpha?codes=${data[0].borders.join(",")}`;
            return fetch(neighborUrl);
        })
        .then(response => response ? response.json() : null)
        .then(data => {
            if (data) renderNeighbors(data);
        })
        .catch(error => {
            console.error("Hata:", error.message);
            document.querySelector("#notFoundMessage").classList.remove("d-none"); // "Ülke bulunamadı" hatasını göster
        })
        .finally(() => {
            loadingIcon.classList.add("d-none"); // İşlem bittiğinde yükleniyor ikonunu gizle
        });
}

function renderCountry(data) {
    let html = `
        <div class="card-header">
            Arama Sonucu
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-4">
                    <img src="${data.flags?.png}" alt="Bayrak" class="img-fluid">
                </div>
                <div class="col-8">
                    <h3 class="card-title">${data.name?.common || "Bilinmiyor"}</h3>
                    <hr>
                    <div class="row">
                        <div class="col-4">Nüfus:</div>
                        <div class="col-8">${data.population ? (data.population / 1_000_000).toFixed(1) + " milyon" : "Bilinmiyor"}</div>
                    </div>
                    <div class="row">
                        <div class="col-4">Resmi Diller:</div>
                        <div class="col-8">${data.languages ? Object.values(data.languages).join(", ") : "Bilinmiyor"}</div>
                    </div>
                    <div class="row">
                        <div class="col-4">Başkent:</div>
                        <div class="col-8">${data.capital ? data.capital[0] : "Bilinmiyor"}</div>
                    </div>
                    <div class="row">
                        <div class="col-4">Para Birimi:</div>
                        <div class="col-8">${data.currencies ? Object.values(data.currencies)[0].name + " (" + Object.values(data.currencies)[0].symbol + ")" : "Bilinmiyor"}</div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.querySelector("#country-details").innerHTML = html;
}

function renderNeighbors(data) {
    let html = "";
    for (let country of data) {
        html += `
            <div class="col-2 mt-2">
                <div class="card neighbor-card" data-country="${country.name.common}" role="button" tabindex="0">
                    <img src="${country.flags.png}" class="card-img-top">
                    <div class="card-body">
                        <h6 class="card-title">${country.name.common}</h6>
                    </div>
                </div>
            </div>
        `;
    }
    document.querySelector("#neighbors").innerHTML = html;

    // Komşu ülke kartlarına click eventi ekleme
    document.querySelectorAll(".neighbor-card").forEach(card => {
        card.addEventListener("click", function () {
            const countryName = this.getAttribute("data-country");
            getCountry(countryName);
        });
    });
}

// Çarpı butonlarına tıklanınca uyarıyı kapat
document.querySelector("#closeAlert").addEventListener("click", () => {
    document.querySelector("#alertMessage").classList.add("d-none");
});
document.querySelector("#closeNotFound").addEventListener("click", () => {
    document.querySelector("#notFoundMessage").classList.add("d-none");
});

// Enter tuşuna basıldığında butonu tetikle
document.getElementById("txtSearch").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("btnSearch").click();
    }
});