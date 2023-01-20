function start() {
    for (; true;) {
        let broj=prompt("Unesi peticu i započni igricu");

        broj = parseInt("broj");

        if (broj===(5)) {
            
            alert("Unio si peticu i započeo igricu");
            break;
        }
        
        else {
            alert("Pokušaj ponovo");
            
        }

    }
}