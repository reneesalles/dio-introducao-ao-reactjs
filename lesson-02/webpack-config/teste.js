/**
 * 
 * @param {string[]} args 
 * @param {string} separator
 */
function teste(args, separator) {
    const msg = args.join(separator);
    console.log(msg);
}

teste(['Olá', 'Mundo!'], ' ');
teste(['Hello', 'World!'], ' ');