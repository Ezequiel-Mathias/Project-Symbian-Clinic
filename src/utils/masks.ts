export const applyCellMask = (value : string) => {
    return value
        .replace(/\D/g, "")
        .replace(/^0/, "")
        .replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3")
        .replace(/^(\d\d)(\d{5})(\d{0,4}).*/, "($1) $2-$3")
        .replace(/^(\d\d)(\d{0,5})/, "($1) $2")
        .replace(/^(\d*)/, "$1");
}

export const applyTelephoneMask = (value : string) => {
    return value
        .replace(/\D/g, "")
        .replace(/^0/, "")
        .replace(/^(\d\d)(\d{4})(\d{4}).*/, "($1) $2-$3")
        .replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3")
        .replace(/^(\d\d)(\d{0,5})/, "($1) $2")
        .replace(/^(\d*)/, "$1");
}