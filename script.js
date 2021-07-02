//api fetcher by healer op
fetch('api.json')
.then(res=> res.json())
.then(data => {
    console.log(data.Survival);
    const html = data.Survival.player_name.map(user =>{
    return `
    <div class="gg">
    <p><img src='"http://cravatar.eu/avatar/"${user}"/64.png"' width="64px" alt="logo">${user}</p>
    </div>`;
}).join('');
document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
}).catch(error =>{
console.log(error);
});
//change the code not credits
