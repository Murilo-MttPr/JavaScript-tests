function changeAttribute(){
    const el = document.querySelector('img');
    const p = document.querySelector('p');
    el.src = 'google.com';
    p.innerText = el.src;
}

const el = document.querySelector('input');
el.type = 'password';
el.placeholder = '1234';