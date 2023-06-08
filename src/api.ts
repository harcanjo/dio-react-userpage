const conta = {
    email: 'hugo@dio.bank',
    password: '123',
    name: 'Hugo Arcanjo',
    balance: 1000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
