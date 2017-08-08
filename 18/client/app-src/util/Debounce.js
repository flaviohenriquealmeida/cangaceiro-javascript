export function debounce(fn, milissegundos) {

    let timer = 0;
    
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(), milissegundos);
    }
}