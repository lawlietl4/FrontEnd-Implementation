let url = `config.json`;

const main = data => {
    console.log(data);
    let navbar = document.getElementsByClassName('navbar');
    let menu_contents = '';
    data.menu_items.forEach(item => {
        console.log(item);
        menu_contents += `
        <div>
            <a href='${item.path}'>
                ${item.name}
            </a>
        </div
        `;
    });
    navbar[0].innerHTML = menu_contents;
}

fetch(url)
    .then(response => response.json())
    .then(data => {
        main(data);
    });