const formatCurrency = (data) => {
    let val = (data / 1).toFixed(0).replace('.')
    return 'Rp. ' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

export default formatCurrency