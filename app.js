const p2 = document.getElementById('p2')
function typeWriter(p2) {
    const textArray = p2.innerHTML.split('');
    p2.innerHTML = '';
    textArray.forEach((letter, i) =>
        setTimeout(() => (p2.innerHTML += letter), 95 * i)
    );
    setInterval(() => typeWriter(p2), 9000);
}

typeWriter(p2);

const p3 = document.getElementById('p3')
function typeWriter2(p3) {
    const textArray = p3.innerHTML.split('');
    p3.innerHTML = '';
    textArray.forEach((letter, i) =>
        setTimeout(() => (p3.innerHTML += letter), 95 * i)
    );
    setInterval(() => typeWriter2(p3), 9000);
}

typeWriter2(p3);



const p4 = document.getElementById('p4')
function typeWriter3(p4) {
    const textArray = p4.innerHTML.split('');
    p4.innerHTML = '';
    textArray.forEach((letter, i) =>
        setTimeout(() => (p4.innerHTML += letter), 100 * i)
    );
    setInterval(() => typeWriter3(p4), 9000);
}

typeWriter3(p4);

