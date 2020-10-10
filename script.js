const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// question one

const cat = {

    complain: function() {

            console.log("Meow!");

        }
}

// question two

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// question three

heading.style.fontSize = "2em";

// question four

heading.classList.add("subheading");

// question five

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {

    paragraphs[i].style.color = "red";

}

// question six

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";

resultsContainer.style.backgroundColor = "yellow";

// question seven

function catsList (list) {

    for(let i = 0; i < list.length; i++) {

        console.log(list[i].name);
    }
}

catsList(cats);

// question eight

function createCats (cats) {

    let html = "";

    for(let i = 0; i < cats.length; i++) {

        let ageStatus = "Age unknown";

        if(cats[i].age) {
            
            ageStatus = cats[i].age;

        }

        html += `<div class="cat">

                    <h5>${cats[i].name}</h5>
                    
                    <p>${ageStatus}</p>
                
                </div>`;
    }

    return html;

}

const updatedHTML = createCats(cats);

const catContainer = document.querySelector(".cat-container");

catContainer.innerHTML = updatedHTML;

