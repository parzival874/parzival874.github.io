const main = document.querySelector('.main');
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

while (true) {
    let n = prompt("Enter your name");
    
    if(n == null) {
        main.style.display = "none";
        cancel.style.display = "flex";
        msg.innerHTML = "Thank you parin at binuksan mo 😊";
    }

    if (n.length > 0) {
        alert('Hi '  + n);
        alert("nung una kitang nakita sa practice");
        alert("Nagandahan na agad ako sayo AHAHA");
        alert("Pero that time nahihiya ako pa ako ");
        alert("kaya di pa kita nilalapitan HAHHHA ");
        alert("pero ngayon nag karoon na ako ng lakas ng loob ");
        alert("na sabihin na, ");
        alert("What if gusto kita");
        alert("Hindi ako nag eexpect ng Crush back ");
        alert("pero what if lang naman HAHAHHA ");

        
        
        main.style.display = 'block';
        break;
    }
}