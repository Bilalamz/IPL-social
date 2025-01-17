function isPasswordValid(password) {
    // Nettoyage des espaces inutiles au début et à la fin
    password = password.trim();

    // Vérifie que le mot de passe contient au moins 8 caractères
    if (password.length < 8) {
        return false;
    }

    // Vérifie qu'il contient au moins un caractère spécial
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharRegex.test(password)) {
        return false;
    }

    // Vérifie qu'il contient au moins un chiffre
    const digitRegex = /\d/;
    if (!digitRegex.test(password)) {
        return false;
    }

    // Vérifie qu'il ne contient pas "IPL" (peu importe la casse)
    const forbiddenSubstring = /ipl/i;
    if (forbiddenSubstring.test(password)) {
        return false;
    }

    // Si toutes les conditions sont respectées, le mot de passe est valide
    return true;
}

module.exports = isPasswordValid;
