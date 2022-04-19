export const right = () => {
    let block = document.getElementsByClassName("tableBlock");
    block.item(0).scrollLeft = 300
}
export const left = () => {
    let block = document.getElementsByClassName("tableBlock");
    block.item(0).scrollLeft = 0;
}