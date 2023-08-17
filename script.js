document.querySelector('#clipboard').onclick = async () => {
    try {
        await navigator.clipboard.writeText('gab3073')
    } catch (error) {
        console.log(error);
    }
}