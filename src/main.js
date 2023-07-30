import data from "../data.json" assert { type: 'json' };
const stats = document.querySelector("[data-stats]");

const statsClasses = [
    {
        statName: "Reaction",
        classes: ["clr-light-red", "clr-light-red-transparent-bg"]        
    },
    {
        statName: "Memory",
        classes: ["clr-orangey-yellow", "clr-orangey-yellow-transparent-bg"]
    },
    {
        statName: "Verbal",
        classes: ["clr-green-teal", "clr-green-teal-transparent-bg"]
    },
    {
        statName: "Visual",
        classes: ["clr-cobalt-blue", "clr-cobalt-blue-transparent-bg"]
    }
]

data.map(({ category }, index) => {
    statsClasses.forEach(({ statName, classes }) => {
        if (category === statName) {
            data[index]["classes"] = classes;
        }
    })
})

let code = "";
data.forEach(({category, score, icon, classes}) => code += `
    <div class="p-1 rounded-.5 flex justify-between ${classes[1]}">
        <div class="flex gap-.5">
            <img src="${icon}" alt="${category}">
            <h2 class="${classes[0]}">${category}</h2>
        </div>
        <p class="font-bold">${score} <span class="clr-dark-gray-blue opacity-70">/ 100</span></p>
    </div>
`)
stats.innerHTML = code;

console.log(code)