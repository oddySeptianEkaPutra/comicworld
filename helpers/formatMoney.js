
function formatMoney(value){
    return `Rp ${value.toLocaleString()},00`
}

module.exports = formatMoney