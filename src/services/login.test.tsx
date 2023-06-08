import { login } from "./login"

describe('login', () => {
    const mockEmail = 'hugo@dio.bank';
    const mockPassword = 'password123';

    it('Should display a welcome alert if the email and password are valid', async () => {
        const response = await login(mockEmail, mockPassword);
        expect(response).toBeTruthy();
    });

    it('Should display an error if the email is invalid', async () => {
        const response = await login('email@invalido.com', mockPassword);
        expect(response).toBeFalsy();
    });

    it('Should display an error if the password is invalid', async () => {
        const response = await login(mockEmail, 'invalidpassword');
        expect(response).toBeFalsy();
    });
});