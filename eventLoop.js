function logWorld(){
    console.log('world');
}

function main() {
    
    console.log('hello');
    setTimeout(logWorld,1000);
    console.log('goodbye');
}
main()